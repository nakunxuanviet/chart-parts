// tslint:disable no-submodule-imports
import { MarkType } from '@gog/mark-interfaces'
import { SGMark, SGGroupItem } from '@gog/scenegraph-interfaces'
import { VSvgNode } from '@gog/vdom-interfaces'
import { getItemSpace, ItemSpace } from '@gog/util'
import { commonProps, assertTypeIs } from './util'
import { renderMark } from './index'
import { rectangle } from '../path'
import {
	VSvgMarkConverter,
	VSvgMarkOutput,
	VSvgRenderContext,
	translate,
} from './interfaces'

declare var require: any
// tslint:disable-next-line no-var-requires
const flatMap = require('lodash/flatMap')

/**
 * Renders a group's "rectangle", which can have a fill and stroke
 * @param item
 */
function renderGroupRectangle(item: SGGroupItem, space: ItemSpace): VSvgNode {
	const groupRect: VSvgNode = {
		type: 'path',
		attrs: {
			...commonProps(item),
			d: rectangle(
				{ ...item, ...space.shape } as any,
				space.origin.x || 0,
				space.origin.y || 0,
			).toString(),
		},
		metadata: item.metadata,
		channels: item.channels,
	}
	return groupRect
}

/**
 * Renders children of the group
 * @param item The group item
 */
function renderChildren(
	item: SGGroupItem,
	context: VSvgRenderContext,
): VSvgMarkOutput {
	let nodes: VSvgNode[] = []
	let defs: VSvgNode[] = []

	const groupItems = item.items || []
	groupItems.forEach(m => {
		const renderedChild = renderMark(m, context)
		if (renderedChild.defs) {
			defs = [...defs, ...renderedChild.defs]
		}
		nodes = [...nodes, ...renderedChild.nodes]
	})

	return { defs, nodes }
}

function renderGroup(
	item: SGGroupItem,
	space: ItemSpace,
	children: VSvgNode[],
): VSvgNode {
	const { channels, metadata } = item
	const group: VSvgNode = {
		type: 'g',
		transforms: [translate(space.origin.x, space.origin.y)],
		children,
		metadata,
		channels,
	}
	return group
}

function renderGroupClip(clipId: string, group: VSvgNode, groupRect: VSvgNode) {
	const clipPath: VSvgNode = {
		type: 'clipPath',
		attrs: {
			id: clipId,
		},
		children: [groupRect],
	}

	group = {
		type: 'g',
		attrs: {
			clipPath: `url(#${clipId})`,
		},
		children: [group],
	}

	return { clipPath, group }
}

export class GroupRenderer implements VSvgMarkConverter {
	public static TARGET_MARK_TYPE = MarkType.Group

	public render(mark: SGMark<SGGroupItem>, context: VSvgRenderContext) {
		assertTypeIs(mark, GroupRenderer.TARGET_MARK_TYPE)

		const defs: VSvgNode[] = []
		const nodes = flatMap(mark.items, (item: SGGroupItem) => {
			const space = getItemSpace(item)

			// Render the Group's Rectangle
			const groupRect = renderGroupRectangle(item, space)

			// Render the Group's children
			const { defs: groupDefs, nodes: groupChildren } = renderChildren(
				item,
				context,
			)
			defs.push(...(groupDefs || []))
			// Render the group
			let group = renderGroup(item, space, groupChildren)

			// Handle if the group is clipped
			if (item.clip) {
				const { group: groupWrapper, clipPath } = renderGroupClip(
					`clip${context.nextId()}`,
					group,
					groupRect,
				)
				defs.push(clipPath)
				group = groupWrapper
			}

			return [groupRect, group]
		})

		return { nodes, defs }
	}
}