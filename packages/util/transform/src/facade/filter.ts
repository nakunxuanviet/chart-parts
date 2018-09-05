// tslint:disable no-var-requires
import { Predicate } from '../interfaces'
import { DatasetTransform } from './interfaces'

declare var require: any
const { filter: vegaFilter } = require('vega-transforms')

/**
 * The cross transform compute the cross-product of a data stream with itself.
 */
export interface FilterBuilder extends DatasetTransform {
	/**
	 * The filter to use for limiting results. If the expression evaluates to
	 * false, the data object will be filtered.
	 *
	 * @param value
	 */
	filter(value: Predicate<any>): FilterBuilder
}

export class FilterBuilderImpl implements FilterBuilder {
	private filterValue: Predicate<any> | undefined

	public filter(value: Predicate<any>) {
		this.filterValue = value
		return this
	}

	public build(df: any, from: any) {
		if (!this.filterValue) {
			throw new Error('filter predicate must be defined')
		}
		const spec: any = {
			expr: this.filterValue,
			pulse: from,
		}
		const crossNode = df.add(vegaFilter, spec)
		return crossNode
	}
}

export function filter(predicate: Predicate<any>) {
	return new FilterBuilderImpl().filter(predicate)
}
