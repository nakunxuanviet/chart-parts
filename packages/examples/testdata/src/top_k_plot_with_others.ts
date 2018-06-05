// Bar Chart Example, captured from https://vega.github.io/vega/examples/bar-chart/

// tslint:disable no-var-requires
import { parseScene } from '@gog/scenegraph'
import { SGMark } from '@gog/mark-interfaces'
const data = require('../resources/top_k_plot_with_others.json')

export const scenegraph = parseScene(data)
export const title = 'Top-K Plot With Others'
export const dimensions = {
	height: 450,
	width: 450,
	origin: [90, 19] as [number, number],
}