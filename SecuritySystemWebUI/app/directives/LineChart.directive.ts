/**
 * Line Chart directives handles generating the sales graph.
 * This relies heavily on the Javascript D3 Library.
 * @Author Ryan Borgeson
 **/
/// <reference path="../d3.d.ts" />
import { Directive, Input, OnChanges } from '@angular/core';

@Directive({
    selector: '[line-chart]',
    inputs: ['Data']
})
export class LineChartDirective implements OnChanges {

    // Data object that contains graph information.
    public Data: Array<{ AmbientLight: number, TimeStamp: Date }>;

    /**
     * Constructor for Line chart directive.
     */
    constructor() {
    }

    /**
     * Determines if there are any changes to the graph data
     * and re-renders the graph according to the new data.
     */
    ngOnChanges() {
        // Only display data if any actually exists.
        if (this.Data != null) {
            this.Render(this.Data);
        }
    }

    /**
     * Render the line graph using sale and timestamp information
     * passed into the directive. This will create a line chart using the
     * D3 library and display it.
     * @param Data Object containing sales and timestamp details.
     */
    public Render(Data: Array<{ AmbientLight: number, TimeStamp: Date }>) {
        d3.select("#LineChart").selectAll("*").remove();


        var margin = { top: 20, right: 20, bottom: 30, left: 50 },
            width = d3.select("#LineChart")[0][0].offsetWidth - margin.left - margin.right,
            height = 300 - margin.top - margin.bottom;

        if (width <= 0)
            width = 600;

        // Parse the date / time
        var parseDate = d3.time.format("%d-%b-%y").parse;
        var formatTime = d3.time.format("%e %B");

        // Set the ranges
        var x = d3.time.scale().range([0, width]);
        var y = d3.scale.linear().range([height, 0]);

        // Define the axes
        var xAxis = d3.svg.axis().scale(x)
            .orient("bottom")
            .ticks(5)
            .tickPadding(10);

        // Determine area.
        var area = d3.svg.area()
            .x(function (d) { return x(d.TimeStamp); })
            .y0(height)
            .y1(function (d) { return y(d.AmbientLight); });

        var yAxis = d3.svg.axis().scale(y)
            .orient("left")
            .ticks(5)
            .tickSize(-width, 0, 0)
            .tickPadding(20)
            .tickFormat(d3.format("0.00"));

        // Define the line
        var valueline = d3.svg.line()
            .x(function (d) { return x(d.TimeStamp); })
            .y(function (d) { return y(d.AmbientLight); });

        // Define the div for the tooltip
        var div = d3.select("#LineChart").append("div")
            .attr("class", "tooltip")
            .style("opacity", 0);

        // Adds the svg canvas
        var svg = d3.select("#LineChart")
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

        // Get the data
            Data.forEach(function (d) {
                d.TimeStamp = new Date(d.TimeStamp);
                d.AmbientLight = +d.AmbientLight;
            });
            
            // Scale the range of the data
            x.domain(d3.extent(Data, function (d) { return d.TimeStamp; }));
            y.domain([0, d3.max(Data, function (d) { return d.AmbientLight; })]);

            // Add the X Axis
            svg.append("g")
                .attr("class", "x axis")
                .attr("transform", "translate(0," + height + ")")
                .call(xAxis);

            // Add the Y Axis
            svg.append("g")
                .attr("class", "y axis")
                .call(yAxis);

            // Add the valueline path.
            svg.append("path")
                .attr("class", "line")
                .attr("d", valueline(Data));

            // Add the filled area
            svg.append("path")
                .datum(Data)
                .attr("class", "area")
                .attr("d", area);

            
            // Add the scatterplot
            svg.selectAll("dot")
                .data(Data)
                .enter().append("circle")
                .attr("r", 4)
                .attr("cx", function (d) { return x(d.TimeStamp); })
                .attr("cy", function (d) { return y(d.AmbientLight); })
                .on("mouseover", function (d) {
                    d3.select(this)
                        .transition()
                        .attr("r", 7);
                })
                .on("mouseout", function (d) {
                    d3.select(this)
                        .transition()
                        .attr("r", 4);
                });
    }
}