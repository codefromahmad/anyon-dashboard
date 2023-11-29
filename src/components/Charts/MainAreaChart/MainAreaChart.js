import React, { useEffect, useRef, useState } from 'react'
import { createChart, LineStyle } from 'lightweight-charts'
import { format, parse } from 'date-fns'
import './mainareachart.css'

const MainAreaChart = ({ data, trend }) => {
  const chartContainer = useRef(null)
  const tooltipRef = useRef(null)
  const crosshairMoveSubscription = useRef(null) // Add a ref to store the subscription ID

  useEffect(() => {
    if (!chartContainer.current || !data.length) return

    console.log('Container width:', chartContainer.current.offsetWidth)
    console.log('Number of data points:', data.length)

    const chart = createChart(chartContainer.current, {
      width: chartContainer.current.offsetWidth,
      height: chartContainer.current.offsetHeight,
      crosshair: {
        vertLine: {
          visible: false
        },
        horzLine: {
          visible: false
        }
      }
    })

    const positiveColor = '#09CB09'
    const negativeColor = '#FF0000'
    const areaColor = trend === 'up' ? positiveColor : negativeColor

    const areaSeries = chart.addAreaSeries({
      lineColor: areaColor,
      topColor: areaColor,
      bottomColor: `${areaColor}10`,
      lineWidth: 2,
      crosshairMarkerVisible: true,
      priceLineVisible: false,
      lastValueVisible: false
    })

    // // Subscribe to crosshair move
    // crosshairMoveSubscription.current = chart.subscribeCrosshairMove(
    //   (param) => {
    //     const [key, value] = param.seriesData.entries().next().value;

    //     if (
    //       param &&
    //       param.time &&
    //       param.seriesData &&
    //       param.seriesData.length
    //     ) {
    //       const { price } = param.seriesData[0];

    //       // Update tooltip content and position
    //       if (tooltipRef.current) {
    //         tooltipRef.current.innerHTML = `<div className="custom-tooltip">Date: ${value.time}</div><div>Price: ${value.value}</div>`;
    //         tooltipRef.current.style.left = `${param.point.x}px`;
    //         tooltipRef.current.style.top = `${param.point.y}px`;
    //       }
    //     } else {
    //       // Hide tooltip when crosshair is not over a data point
    //       if (tooltipRef.current) {
    //         // tooltipRef.current.style.left = "-1000px";
    //       }
    //     }
    //   }
    // );

    const formattedData = data.map(({ time, value }) => ({
      time,
      value
    }))

    areaSeries.setData(formattedData)

    // Setting visible range
    // chart.timeScale().setVisibleRange({
    //   from: data[0].time,
    //   to: data[data.length - 1].time,
    // });

    // Setting visible range
    chart.timeScale().fitContent()

    chart.applyOptions({
      leftPriceScale: {
        visible: false
      },
      rightPriceScale: {
        visible: true
      },
      timeScale: {
        visible: true
      },
      grid: {
        vertLines: false,
        horzLines: false
      },
      handleScroll: false,
      handleScale: false,
      localization: {
        dateFormat: 'Mon dd'
      }
      // localization: {
      //   timeFormatter: (timestamp) => format(timestamp, "yyyy-MM-dd HH:mm"),
      // },
    })

    // Ensure the chart updates its size when the container is resized
    const handleResize = () => {
      chart.applyOptions({
        width: chartContainer.current.offsetWidth,
        height: chartContainer.current.offsetHeight
      })
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      // Unsubscribe from crosshair move to avoid memory leaks
      // if (crosshairMoveSubscription.current) {
      //   chart.unsubscribeCrosshairMove(crosshairMoveSubscription.current);
      // }
      chart.remove()
    }
  }, [data, trend])

  return (
    <>
      <div ref={tooltipRef} className='custom-tooltip' />
      <div ref={chartContainer} style={{ width: '100%', height: '100%' }} />
    </>
  )
}

export default MainAreaChart
