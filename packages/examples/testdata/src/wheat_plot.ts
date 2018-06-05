// Bar Chart Example, captured from https://vega.github.io/vega/examples/bar-chart/

// tslint:disable no-var-requires
import { parseScene } from '@gog/scenegraph'
import { SGMark } from '@gog/mark-interfaces'
const data = require('../resources/wheat_plot.json')

export const scenegraph = parseScene(data)
export const title = 'Wheat Plot'
export const dimensions = {
	height: 700,
	width: 550,
	origin: [70, 19] as [number, number],
}