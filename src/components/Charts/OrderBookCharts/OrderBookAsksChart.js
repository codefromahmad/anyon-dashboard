import React, { useEffect, useRef } from 'react'
import { createChart, PriceScaleMode } from 'lightweight-charts'

const OrderBookAsksChart = () => {
  const chartContainerRef = useRef(null)

  useEffect(() => {
    const chart = createChart(chartContainerRef.current, {
      width: 200,
      height: 200,
      timeScale: {
        visible: false // hide the time scale
      },
      handleScroll: false,
      handleScale: false,
      grid: {
        vertLines: false,
        horzLines: false
      },
      leftPriceScale: {
        visible: true
      },
      rightPriceScale: {
        visible: false
      },
      crosshair: {
        vertLine: {
          visible: false
        },
        horzLine: {
          visible: false
        }
      }
    })

    const asksSeries = chart.addAreaSeries({
      topColor: 'rgba(255, 0, 0, 0.5)',
      bottomColor: 'rgba(255, 0, 0, 0)',
      lineColor: 'rgba(255, 0, 0, 1)',
      lineWidth: 1,
      priceLineVisible: false,
      lastValueVisible: false
    })

    const bidsSeries = chart.addAreaSeries({
      topColor: 'rgba(0, 128, 0, 0.5)',
      bottomColor: 'rgba(0, 128, 0, 0)',
      lineColor: 'rgba(0, 128, 0, 1)'
    })

    const data = [
      { price: 20.5, bids: 2000, asks: 1400 },
      { price: 22.5, bids: 2000, asks: 1000 },
      { price: 25.5, bids: 2000, asks: 800 },
      { price: 40.5, bids: 2000, asks: 500 },
      { price: 100.01, bids: 1500, asks: 450 },
      { price: 120.01, bids: 900, asks: 300 },
      { price: 125.01, bids: 100, asks: 220 },
      { price: 134.01, bids: 50, asks: 200 },
      { price: 140.01, bids: 100, asks: 160 }
    ]

    const asksData = data.map(({ price, asks }) => ({
      time: price,
      value: asks
    }))
    const bidsData = data.map(({ price, bids }) => ({
      time: price,
      value: bids
    }))

    asksSeries.setData(asksData)
    // bidsSeries.setData(bidsData)

    // Setting visible range
    chart.timeScale().setVisibleRange({
      from: data[0].price,
      to: data[data.length - 1].price
    })

    // Set price scale mode to IndexedTo100 for asksSeries
    asksSeries.applyOptions({
      priceScale: {
        // mode: PriceScaleMode.IndexedTo100,
        invertScale: false
      }
    })

    // Set price scale mode to IndexedTo100Inverted for bidsSeries
    bidsSeries.applyOptions({
      priceScale: {
        mode: PriceScaleMode.IndexedTo100Inverted
      }
    })

    return () => {
      chart.remove()
    }
  }, [])

  return <div ref={chartContainerRef} />
}

export default OrderBookAsksChart
