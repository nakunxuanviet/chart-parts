/*!
 * Copyright (c) Microsoft. All rights reserved.
 * Licensed under the MIT license. See LICENSE file in the project.
 */

import React, { memo } from 'react'
import theme from '../../util/theme'
interface LogoProps {
	height: number
	width?: number
}
// logo used for splash page component, contains background
const Logo: React.FC<LogoProps> = memo(({ height, width }) => {
	const widthDim = `${width}` || '100%'
	return (
		<svg
			width={widthDim}
			height={`${height}`}
			version="1.1"
			viewBox={`0 0 1057.1312 519.66507`}
			id="svg-logo2"
		>
			<g transform="translate(512.18 80.883)">
				<g id="chart-parts-letter-group">
					<g
						transform="translate(-236.46 79.375)"
						className={'chart-part-letters'}
						id="char-c1"
					>
						<path
							d="m-42.145 27.329a48.318 49.196 1.4538 0 0 -67.821 5.5295l36.61 32.055zm-31.212 37.584-31.458 37.361a48.318 49.196 1.4538 0 0 67.86 -5.0439zm-31.458 37.361a48.318 49.196 1.4538 0 1 -0.073 -0.0601 48.318 49.196 1.4538 0 0 0.0684 0.0657zm-0.073-0.0601a48.318 49.196 1.4538 0 1 -1.7792 -1.7188 48.318 49.196 1.4538 0 0 1.6601 1.6202 48.318 49.196 1.4538 0 0 0.12026 0.0972zm-1.7792-1.7188a48.318 49.196 1.4538 0 1 -1.7381 -1.6942 48.318 49.196 1.4538 0 0 1.7381 1.6942zm-1.7381-1.6942a48.318 49.196 1.4538 0 1 -1.5874 -1.8728 48.318 49.196 1.4538 0 0 1.5874 1.8728zm-1.5874-1.8728a48.318 49.196 1.4538 0 1 -1.5526 -1.8491 48.318 49.196 1.4538 0 0 1.5526 1.8491zm-1.5526-1.8491a48.318 49.196 1.4538 0 1 -1.4916 -2.1635 48.318 49.196 1.4538 0 0 1.4916 2.1635zm-1.4916-2.1635a48.318 49.196 1.4538 0 1 -1.268 -1.86 48.318 49.196 1.4538 0 0 1.268 1.86zm-1.268-1.86a48.318 49.196 1.4538 0 1 -1.3068 -2.3654 48.318 49.196 1.4538 0 0 1.3068 2.3654zm-1.3068-2.3654a48.318 49.196 1.4538 0 1 -1.0482 -1.9236 48.318 49.196 1.4538 0 0 1.0482 1.9236zm-1.0482-1.9236a48.318 49.196 1.4538 0 1 -1.0318 -2.4068 48.318 49.196 1.4538 0 0 1.0318 2.4068zm-1.0318-2.4068a48.318 49.196 1.4538 0 1 -0.89327 -2.113 48.318 49.196 1.4538 0 0 0.89327 2.113zm-0.89327-2.113a48.318 49.196 1.4538 0 1 -0.76801 -2.4213 48.318 49.196 1.4538 0 0 0.76801 2.4213zm-0.76801-2.4213a48.318 49.196 1.4538 0 1 -0.70194 -2.2579 48.318 49.196 1.4538 0 0 0.70194 2.2579zm-0.70194-2.2579a48.318 49.196 1.4538 0 1 -0.52124 -2.4633 48.318 49.196 1.4538 0 0 0.52124 2.4633zm-0.52124-2.4633a48.318 49.196 1.4538 0 1 -0.48296 -2.3489 48.318 49.196 1.4538 0 0 0.48296 2.3489zm-0.48296-2.3489a48.318 49.196 1.4538 0 1 -0.2563 -2.3256 48.318 49.196 1.4538 0 0 0.2563 2.3256zm-0.2563-2.3256a48.318 49.196 1.4538 0 1 -0.27186 -2.5811 48.318 49.196 1.4538 0 0 0.27186 2.5811zm-0.27186-2.5811a48.318 49.196 1.4538 0 1 -0.0254 -2.2622 48.318 49.196 1.4538 0 0 0.0254 2.2622zm-0.0254-2.2622a48.318 49.196 1.4538 0 1 -0.017 -2.6355 48.318 49.196 1.4538 0 0 0.017 2.6355zm-0.017-2.6355a48.318 49.196 1.4538 0 1 0.21592 -2.4824 48.318 49.196 1.4538 0 0 -0.21592 2.4824zm0.21592-2.4824a48.318 49.196 1.4538 0 1 0.22168 -2.4137 48.318 49.196 1.4538 0 0 -0.22168 2.4137zm0.22168-2.4137a48.318 49.196 1.4538 0 1 0.45648 -2.442 48.318 49.196 1.4538 0 0 -0.45648 2.442zm0.45648-2.442a48.318 49.196 1.4538 0 1 0.45984 -2.3901 48.318 49.196 1.4538 0 0 -0.45984 2.3901zm0.45984-2.3901a48.318 49.196 1.4538 0 1 0.67583 -2.3205 48.318 49.196 1.4538 0 0 -0.67583 2.3205zm0.67583-2.3205a48.318 49.196 1.4538 0 1 0.71046 -2.3946 48.318 49.196 1.4538 0 0 -0.71046 2.3946zm0.71046-2.3946a48.318 49.196 1.4538 0 1 0.88669 -2.2064 48.318 49.196 1.4538 0 0 -0.88669 2.2064zm0.88669-2.2064a48.318 49.196 1.4538 0 1 0.95337 -2.34 48.318 49.196 1.4538 0 0 -0.95337 2.34zm0.95337-2.34a48.318 49.196 1.4538 0 1 1.1017 -2.1108 48.318 49.196 1.4538 0 0 -1.1017 2.1108zm1.1017-2.1108a48.318 49.196 1.4538 0 1 1.1746 -2.2264 48.318 49.196 1.4538 0 0 -1.1746 2.2264zm1.1746-2.2264a48.318 49.196 1.4538 0 1 1.3831 -2.1122 48.318 49.196 1.4538 0 0 -1.3831 2.1122zm1.3831-2.1122a48.318 49.196 1.4538 0 1 1.3137 -1.9835 48.318 49.196 1.4538 0 0 -1.3137 1.9835zm1.3137-1.9835a48.318 49.196 1.4538 0 1 1.1445 -1.4676 48.318 49.196 1.4538 0 0 -1.1445 1.4676zm1.1445-1.4676a48.318 49.196 1.4538 0 1 0.852 -1.0784 48.318 49.196 1.4538 0 0 -0.0561 0.0601 48.318 49.196 1.4538 0 0 -0.79587 1.0183zm0.852-1.0784a48.318 49.196 1.4538 0 1 0.11431 -0.12298l-0.0101-9e-3a48.318 49.196 1.4538 0 0 -0.10359 0.13209z"
							fill={theme.logoPalette.green}
						/>
						<path
							d="m-73.356 64.913-36.609-32.056a48.318 49.196 1.4538 0 0 -0.11456 0.12296 48.318 49.196 1.4538 0 0 -0.85196 1.0784 48.318 49.196 1.4538 0 0 -1.1445 1.4675 48.318 49.196 1.4538 0 0 -1.3021 1.9646 48.318 49.196 1.4538 0 0 -1.3971 2.1339 48.318 49.196 1.4538 0 0 -1.1745 2.2265 48.318 49.196 1.4538 0 0 -1.0971 2.1025 48.318 49.196 1.4538 0 0 -0.97763 2.3991 48.318 49.196 1.4538 0 0 -0.86478 2.1527 48.318 49.196 1.4538 0 0 -0.71045 2.3945 48.318 49.196 1.4538 0 0 -0.67582 2.3205 48.318 49.196 1.4538 0 0 -0.45998 2.3901 48.318 49.196 1.4538 0 0 -0.45644 2.442 48.318 49.196 1.4538 0 0 -0.22169 2.4138 48.318 49.196 1.4538 0 0 -0.21589 2.4824 48.318 49.196 1.4538 0 0 0.0158 2.4832 48.318 49.196 1.4538 0 0 0.0275 2.4276 48.318 49.196 1.4538 0 0 0.27054 2.58 48.318 49.196 1.4538 0 0 0.2546 2.3023 48.318 49.196 1.4538 0 0 0.51164 2.4913 48.318 49.196 1.4538 0 0 0.49165 2.3274 48.318 49.196 1.4538 0 0 0.72147 2.3191 48.318 49.196 1.4538 0 0 0.74888 2.3653 48.318 49.196 1.4538 0 0 0.95835 2.2634 48.318 49.196 1.4538 0 0 0.96061 2.2411 48.318 49.196 1.4538 0 0 1.2158 2.2284 48.318 49.196 1.4538 0 0 1.1354 2.0595 48.318 49.196 1.4538 0 0 1.387 2.0341 48.318 49.196 1.4538 0 0 1.3851 2.0056 48.318 49.196 1.4538 0 0 1.5403 1.8357 48.318 49.196 1.4538 0 0 1.5986 1.8876 48.318 49.196 1.4538 0 0 1.8777 1.8303 48.318 49.196 1.4538 0 0 1.623 1.5655 48.318 49.196 1.4538 0 0 0.0908 0.0761z"
							fill={theme.logoPalette.blue}
						/>
					</g>
					<g
						transform="translate(-236.46 79.375)"
						className={'chart-part-letters'}
						id="char-h2"
					>
						<rect
							x="-3.4229"
							y="31.453"
							width="28.276"
							height="82.65"
							fill={theme.logoPalette.blue}
						/>

						<rect
							x="-34.975"
							y="31.453"
							width="28.276"
							height="82.65"
							fill={theme.logoPalette.pink}
						/>
						<rect
							x="-34.995"
							y="69.164"
							width="61.56"
							height="16.131"
							fill={theme.logoPalette.green}
						/>
					</g>
					<g
						transform="translate(-236.46 79.375)"
						className={'chart-part-letters'}
						id="char-r4"
					>
						<rect
							x="114.97"
							y="31.453"
							width="28.276"
							height="82.65"
							fill={theme.logoPalette.pink}
						/>
						<path
							transform="matrix(.0058489 .99998 .99998 -.0060008 0 0)"
							d="m80.373 144.54a24.026 23.555 0 0 1 -23.944 23.555 24.026 23.555 0 0 1 -24.107 -23.394l24.025-0.16079z"
							fill={theme.logoPalette.green}
						/>
						<path
							d="m115.33 55.467-0.36056 58.636h58.987z"
							fill={theme.logoPalette.blue}
						/>
					</g>
					<g
						transform="translate(-236.46 79.375)"
						className={'chart-part-letters'}
						id="char-a3"
					>
						<path
							d="m70.395 29.057-21.398 42.441 42.867 0.0818z"
							fill={theme.logoPalette.blue}
						/>
						<path
							d="m48.997 71.499-21.398 42.441 42.867 0.0818z"
							fill={theme.logoPalette.pink}
						/>
						<path
							d="m91.865 71.58-21.398 42.441 42.867 0.0818z"
							fill={theme.logoPalette.orange}
							fillOpacity=".94118"
						/>
					</g>
					<g
						transform="translate(-236.46 79.375)"
						className={'chart-part-letters'}
						id="char-t5"
					>
						<rect
							x="187.43"
							y="32.429"
							width="28.276"
							height="82.65"
							fill={theme.logoPalette.pink}
						/>
						<rect
							x="172.66"
							y="29.518"
							width="58.117"
							height="16.131"
							fill={theme.logoPalette.blue}
						/>
					</g>
					<g
						transform="translate(57.452 -39.409)"
						className={'chart-part-letters'}
						id="char-a7"
					>
						<path
							d="m69.332 148.06-21.398 42.441 42.867 0.0818z"
							fill={theme.logoPalette.blue}
						/>
						<path
							d="m47.934 190.5-21.398 42.441 42.867 0.0818z"
							fill={theme.logoPalette.pink}
						/>
						<path
							d="m90.801 190.58-21.398 42.441 42.867 0.0818z"
							fill="#fab289"
							fillOpacity=".94118"
						/>
					</g>
					<g
						transform="translate(57.452 -39.409)"
						className={'chart-part-letters'}
						id="char-r8"
					>
						<rect
							x="113.34"
							y="150.45"
							width="28.276"
							height="82.65"
							fill={theme.logoPalette.pink}
						/>
						<path
							transform="matrix(.0058489 .99998 .99998 -.0060008 0 0)"
							d="m199.36 142.21a24.026 23.555 0 0 1 -23.944 23.555 24.026 23.555 0 0 1 -24.107 -23.394l24.025-0.16078z"
							fill={theme.logoPalette.green}
						/>
						<path
							d="m113.7 174.47-0.36056 58.636h58.987z"
							fill={theme.logoPalette.blue}
						/>
					</g>
					<g
						transform="translate(57.452 -39.409)"
						className={'chart-part-letters'}
						id="char-p6"
					>
						<rect
							x="-26.538"
							y="150.45"
							width="28.276"
							height="82.65"
							fill={theme.logoPalette.pink}
						/>
						<path
							transform="matrix(.0058489 .99998 .99998 -.0060008 0 0)"
							d="m198.52 2.3358a24.026 23.555 0 0 1 -23.944 23.555 24.026 23.555 0 0 1 -24.107 -23.394l24.025-0.16078z"
							fill={theme.logoPalette.green}
						/>
					</g>
					<g
						transform="translate(57.452 -39.409)"
						className={'chart-part-letters'}
						id="char-t9"
					>
						<rect
							x="186.29"
							y="150.45"
							width="28.276"
							height="82.65"
							fill={theme.logoPalette.pink}
						/>
						<rect
							x="171.53"
							y="147.54"
							width="58.117"
							height="16.131"
							fill={theme.logoPalette.blue}
						/>
					</g>
					<g
						transform="translate(57.452 -39.409)"
						className={'chart-part-letters'}
						id="char-s10"
					>
						<path
							transform="matrix(-.83636 .54817 -.563 -.82646 0 0)"
							d="m-84.306-306.67a39.053 38.766 0 0 1 -38.92 38.766 39.053 38.766 0 0 1 -39.185 -38.501l39.052-0.2646z"
							fill="#f2b490"
						/>
						<path
							transform="matrix(.83636 -.54817 .563 .82646 0 0)"
							d="m146.05 307.31a39.053 38.766 0 0 1 -38.92 38.766 39.053 38.766 0 0 1 -39.185 -38.501l39.052-0.26461z"
							fill={theme.logoPalette.blue}
						/>
					</g>
				</g>
				<g transform="translate(-10.691 -39.021)" className={'background'}>
					<path
						d="m-328.55 339.8a11.465 27.161 72.856 0 1 -31.136 -1.3374 11.465 27.161 72.856 0 1 20.018 -19.144 11.465 27.161 72.856 0 1 31.135 1.338 11.465 27.161 72.856 0 1 -20.016 19.143zm-2.0852-3.8411a7.1655 16.976 72.856 0 0 12.509 -11.963 7.1655 16.976 72.856 0 0 -19.458 -0.83712 7.1655 16.976 72.856 0 0 -12.51 11.965 7.1655 16.976 72.856 0 0 19.459 0.8352z"
						fill={theme.logoPalette.orange}
					/>
					<path
						d="m-326.83 336.41a11.465 27.161 72.856 0 1 -31.136 -1.3374 11.465 27.161 72.856 0 1 20.018 -19.144 11.465 27.161 72.856 0 1 31.135 1.338 11.465 27.161 72.856 0 1 -20.016 19.143zm-2.0852-3.8411a7.1655 16.976 72.856 0 0 12.51 -11.963 7.1655 16.976 72.856 0 0 -19.458 -0.83716 7.1655 16.976 72.856 0 0 -12.51 11.965 7.1655 16.976 72.856 0 0 19.459 0.83514z"
						fill={theme.logoPalette.pink}
					/>
					<path
						d="m-308.61 246.78-39.172 14.356 1.2067 15.157-24.939 21.375 37.219-16.043-1.9845-13.762z"
						fill="#f2b28f"
						fillOpacity=".7451"
					/>
					<path
						d="m-248.07 289.45 32.079-20.434 7.453 29.386z"
						fill={theme.logoPalette.pink}
						fillOpacity=".7451"
					/>
					<path
						d="m403.13 361.9c6.0321-7.8493-7.263-17.904-17.945-26.063-2.2053-1.6843-5.1437 3.2858-4.6205 5.0238 1.1271 3.745 3.1839 9.8767-3.8349 12.728-4.8512 1.971-8.1245-4.4656-14.702-6.2984-6.0433-1.684-3.1929 8.0278-7.6361 6.0916-2.2353-0.97409-3.7477-1.6378-5.6976-3.349-10.562-9.2676-6.9438 0.21426-9.6152-0.18407-5.2531-0.7833-7.3987-4.267-11.974-1.4284-5.809 3.6042-6.5351 2.7493-25.048-0.52162"
						fill="none"
						stroke={theme.logoPalette.green}
						strokeLinecap="round"
						strokeOpacity=".7451"
						strokeWidth="7.1874"
					/>
					<path
						d="m-281.43 332.11 32.079-20.434 7.453 29.386z"
						fill={theme.logoPalette.blue}
						fillOpacity=".7451"
					/>
					<ellipse
						cx="-183.95"
						cy="327.88"
						rx="12.615"
						ry="10.101"
						fill={theme.logoPalette.green}
						fillOpacity=".7451"
					/>
					<path
						d="m-128.61 304.17a14.108 29.171 58.173 0 0 -11.44 26.355 14.108 29.171 58.173 0 0 34.763 -8.1331 14.108 29.171 58.173 0 0 11.438 -26.354 14.108 29.171 58.173 0 0 -34.762 8.1319zm4.3742 3.4173a8.8175 18.232 58.173 0 1 21.724 -5.0824 8.8175 18.232 58.173 0 1 -7.1473 16.471 8.8175 18.232 58.173 0 1 -21.727 5.0824 8.8175 18.232 58.173 0 1 7.1506 -16.471z"
						fill={theme.logoPalette.orange}
					/>
					<path
						d="m36.541 333.41-32.079-20.434-7.4529 29.386z"
						fill={theme.logoPalette.orange}
						fillOpacity=".7451"
					/>
					<ellipse
						cx="53.436"
						cy="307.11"
						rx="12.615"
						ry="10.101"
						fill={theme.logoPalette.pink}
						fillOpacity=".7451"
					/>
					<path
						d="m88.963 354.32a33.714 14.906 24.171 0 0 -39.398 -3.2821 33.714 14.906 24.171 0 0 20.36 27.208 33.714 14.906 24.171 0 0 39.396 3.2811 33.714 14.906 24.171 0 0 -20.358 -27.207zm-3.5705 4.4871a21.071 9.316 24.171 0 1 12.723 17.003 21.071 9.316 24.171 0 1 -24.622 -2.0494 21.071 9.316 24.171 0 1 -12.724 -17.005 21.071 9.316 24.171 0 1 24.622 2.0521z"
						fill={theme.logoPalette.orange}
					/>
					<path
						d="m92.533 349.83a33.714 14.906 24.171 0 0 -39.398 -3.2821 33.714 14.906 24.171 0 0 20.36 27.208 33.714 14.906 24.171 0 0 39.396 3.2811 33.714 14.906 24.171 0 0 -20.358 -27.207zm-3.5705 4.4871a21.071 9.316 24.171 0 1 12.723 17.003 21.071 9.316 24.171 0 1 -24.622 -2.0493 21.071 9.316 24.171 0 1 -12.724 -17.005 21.071 9.316 24.171 0 1 24.622 2.0521z"
						fill={theme.logoPalette.pink}
					/>
					<path
						d="m-24.653 298.59-40.934 1.7288 30.02 47.522z"
						fill={theme.logoPalette.blue}
						fillOpacity=".7451"
					/>
					<ellipse
						cx="-39.351"
						cy="373.23"
						rx="12.615"
						ry="10.101"
						fill={theme.logoPalette.green}
						fillOpacity=".7451"
					/>
					<path
						d="m173.21 348.81-32.079-20.434-7.4529 29.386z"
						fill={theme.logoPalette.pink}
						fillOpacity=".7451"
					/>
					<path
						d="m87.38 334.17c-0.0029-3.7939-3.3109-10.813 0.75486-14.091 2.8724-2.3164 12.244 18.329 16.803 11.143 2.2416-3.5332 7.1598-22.705 11.103-21.443 8.2242 2.631 5.897 12.724 12.807 14.934 8.1703 2.6137 14.624-13.653 15.501-16.191 1.134-3.2821 10.39 1.9255 10.944 2.1025 0.59373 0.18992 5.4579-6.1768 6.1212-6.7814"
						fill="none"
						stroke={theme.logoPalette.blue}
						strokeLinecap="round"
						strokeOpacity=".7451"
						strokeWidth="7.8465"
					/>
					<path
						d="m-19.204 465.64a11.465 27.161 72.856 0 1 -31.136 -1.3374 11.465 27.161 72.856 0 1 20.018 -19.144 11.465 27.161 72.856 0 1 31.135 1.338 11.465 27.161 72.856 0 1 -20.016 19.143zm-2.0852-3.8411a7.1655 16.976 72.856 0 0 12.509 -11.963 7.1655 16.976 72.856 0 0 -19.458 -0.83713 7.1655 16.976 72.856 0 0 -12.51 11.965 7.1655 16.976 72.856 0 0 19.459 0.83517z"
						fill={theme.logoPalette.orange}
					/>
					<path
						d="m-17.485 462.26a11.465 27.161 72.856 0 1 -31.136 -1.3374 11.465 27.161 72.856 0 1 20.018 -19.144 11.465 27.161 72.856 0 1 31.135 1.338 11.465 27.161 72.856 0 1 -20.016 19.143zm-2.0852-3.841a7.1655 16.976 72.856 0 0 12.51 -11.963 7.1655 16.976 72.856 0 0 -19.458 -0.83716 7.1655 16.976 72.856 0 0 -12.51 11.965 7.1655 16.976 72.856 0 0 19.459 0.83516z"
						fill={theme.logoPalette.pink}
					/>
					<path
						d="m27.355 372.62-39.172 14.356 1.2067 15.157-24.939 21.375 37.219-16.043-1.9845-13.762z"
						fill="#f2b28f"
						fillOpacity=".7451"
					/>
					<path
						d="m87.89 415.29 32.079-20.434 7.453 29.386z"
						fill={theme.logoPalette.pink}
						fillOpacity=".7451"
					/>
					<ellipse
						transform="scale(-1,1)"
						cx="-153.69"
						cy="382.49"
						rx="12.615"
						ry="10.101"
						fill={theme.logoPalette.blue}
						fillOpacity=".7451"
					/>
					<path
						d="m27.914 457.95 32.079-20.434 7.4529 29.386z"
						fill={theme.logoPalette.blue}
						fillOpacity=".7451"
					/>
					<ellipse
						cx="125.39"
						cy="453.72"
						rx="12.615"
						ry="10.101"
						fill={theme.logoPalette.green}
						fillOpacity=".7451"
					/>
					<path
						d="m-276.4 375.92-32.079-20.434-7.453 29.386z"
						fill={theme.logoPalette.orange}
						fillOpacity=".7451"
					/>
					<path
						d="m-223.98 396.83a33.714 14.906 24.171 0 0 -39.398 -3.282 33.714 14.906 24.171 0 0 20.36 27.208 33.714 14.906 24.171 0 0 39.396 3.281 33.714 14.906 24.171 0 0 -20.358 -27.207zm-3.5705 4.4871a21.071 9.316 24.171 0 1 12.723 17.003 21.071 9.316 24.171 0 1 -24.622 -2.0494 21.071 9.316 24.171 0 1 -12.724 -17.005 21.071 9.316 24.171 0 1 24.622 2.0521z"
						fill={theme.logoPalette.orange}
					/>
					<path
						d="m-220.41 392.35a33.714 14.906 24.171 0 0 -39.398 -3.2821 33.714 14.906 24.171 0 0 20.36 27.208 33.714 14.906 24.171 0 0 39.396 3.2811 33.714 14.906 24.171 0 0 -20.358 -27.207zm-3.5705 4.4871a21.071 9.316 24.171 0 1 12.723 17.003 21.071 9.316 24.171 0 1 -24.622 -2.0493 21.071 9.316 24.171 0 1 -12.724 -17.005 21.071 9.316 24.171 0 1 24.622 2.0521z"
						fill={theme.logoPalette.pink}
					/>
					<ellipse
						cx="-352.29"
						cy="415.74"
						rx="12.615"
						ry="10.101"
						fill={theme.logoPalette.green}
						fillOpacity=".7451"
					/>
					<path
						d="m-139.73 391.32-32.079-20.434-7.4529 29.386z"
						fill={theme.logoPalette.pink}
						fillOpacity=".7451"
					/>
					<path
						d="m-285.59 415.14-39.172 14.356 1.2067 15.157-24.939 21.375 37.219-16.043-1.9845-13.762z"
						fill="#f2b28f"
						fillOpacity=".7451"
					/>
					<path
						d="m-225.05 457.81 32.079-20.434 7.453 29.386z"
						fill={theme.logoPalette.pink}
						fillOpacity=".7451"
					/>
					<ellipse
						transform="scale(-1,1)"
						cx="159.25"
						cy="425"
						rx="12.615"
						ry="10.101"
						fill={theme.logoPalette.blue}
						fillOpacity=".7451"
					/>
					<path
						d="m-103.74 417.14 32.079-20.434 7.453 29.386z"
						fill={theme.logoPalette.blue}
						fillOpacity=".7451"
					/>
					<ellipse
						cx="-101.94"
						cy="465.06"
						rx="12.615"
						ry="10.101"
						fill={theme.logoPalette.green}
						fillOpacity=".7451"
					/>
					<ellipse
						cx="-105.38"
						cy="356.94"
						rx="12.615"
						ry="10.101"
						fill={theme.logoPalette.orange}
						fillOpacity=".7451"
					/>
					<path
						d="m218.2 333a11.465 27.161 72.856 0 1 -31.136 -1.3374 11.465 27.161 72.856 0 1 20.018 -19.144 11.465 27.161 72.856 0 1 31.135 1.338 11.465 27.161 72.856 0 1 -20.016 19.143zm-2.0852-3.8411a7.1655 16.976 72.856 0 0 12.509 -11.963 7.1655 16.976 72.856 0 0 -19.458 -0.83711 7.1655 16.976 72.856 0 0 -12.51 11.965 7.1655 16.976 72.856 0 0 19.459 0.8352z"
						fill={theme.logoPalette.orange}
					/>
					<path
						d="m219.92 329.61a11.465 27.161 72.856 0 1 -31.136 -1.3374 11.465 27.161 72.856 0 1 20.018 -19.144 11.465 27.161 72.856 0 1 31.135 1.338 11.465 27.161 72.856 0 1 -20.016 19.143zm-2.0852-3.841a7.1655 16.976 72.856 0 0 12.51 -11.963 7.1655 16.976 72.856 0 0 -19.458 -0.83716 7.1655 16.976 72.856 0 0 -12.51 11.965 7.1655 16.976 72.856 0 0 19.459 0.83516z"
						fill={theme.logoPalette.pink}
					/>
					<path
						d="m265.32 325.31 32.079-20.434 7.453 29.386z"
						fill={theme.logoPalette.blue}
						fillOpacity=".7451"
					/>
					<ellipse
						cx="362.8"
						cy="321.08"
						rx="12.615"
						ry="10.101"
						fill={theme.logoPalette.green}
						fillOpacity=".7451"
					/>
					<path
						d="m270.35 369.12-32.079-20.434-7.453 29.386z"
						fill={theme.logoPalette.orange}
						fillOpacity=".7451"
					/>
					<path
						d="m322.77 390.03a33.714 14.906 24.171 0 0 -39.398 -3.282 33.714 14.906 24.171 0 0 20.36 27.208 33.714 14.906 24.171 0 0 39.396 3.2811 33.714 14.906 24.171 0 0 -20.358 -27.207zm-3.5705 4.4871a21.071 9.316 24.171 0 1 12.723 17.003 21.071 9.316 24.171 0 1 -24.622 -2.0494 21.071 9.316 24.171 0 1 -12.724 -17.005 21.071 9.316 24.171 0 1 24.622 2.0521z"
						fill={theme.logoPalette.orange}
					/>
					<path
						d="m326.34 385.55a33.714 14.906 24.171 0 0 -39.398 -3.2821 33.714 14.906 24.171 0 0 20.36 27.208 33.714 14.906 24.171 0 0 39.396 3.2811 33.714 14.906 24.171 0 0 -20.358 -27.207zm-3.5704 4.4871a21.071 9.316 24.171 0 1 12.723 17.003 21.071 9.316 24.171 0 1 -24.622 -2.0494 21.071 9.316 24.171 0 1 -12.724 -17.005 21.071 9.316 24.171 0 1 24.622 2.0521z"
						fill={theme.logoPalette.pink}
					/>
					<ellipse
						cx="194.46"
						cy="408.94"
						rx="12.615"
						ry="10.101"
						fill={theme.logoPalette.green}
						fillOpacity=".7451"
					/>
					<path
						d="m407.02 384.52-32.079-20.434-7.4529 29.386z"
						fill={theme.logoPalette.pink}
						fillOpacity=".7451"
					/>
					<path
						d="m261.16 408.34-39.172 14.356 1.2067 15.157-24.939 21.375 37.219-16.043-1.9845-13.762z"
						fill="#f2b28f"
						fillOpacity=".7451"
					/>
					<path
						d="m321.7 451 32.079-20.434 7.453 29.386z"
						fill={theme.logoPalette.pink}
						fillOpacity=".7451"
					/>
					<ellipse
						transform="scale(-1,1)"
						cx="-387.5"
						cy="418.2"
						rx="12.615"
						ry="10.101"
						fill={theme.logoPalette.blue}
						fillOpacity=".7451"
					/>
				</g>
				<g transform="translate(-7.4835 28.331)" className={'background'}>
					<path
						d="m26.94-14.399-33.006-21.025-7.6684 30.236z"
						fill={theme.logoPalette.orange}
						fillOpacity=".7451"
					/>
					<path
						d="m345.87-86.2a34.689 15.337 24.171 0 0 -40.537 -3.377 34.689 15.337 24.171 0 0 20.948 27.995 34.689 15.337 24.171 0 0 40.535 3.3759 34.689 15.337 24.171 0 0 -20.946 -27.993zm-3.6737 4.6169a21.68 9.5854 24.171 0 1 13.091 17.494 21.68 9.5854 24.171 0 1 -25.333 -2.1087 21.68 9.5854 24.171 0 1 -13.092 -17.497 21.68 9.5854 24.171 0 1 25.334 2.1114z"
						fill={theme.logoPalette.orange}
					/>
					<path
						d="m349.55-90.817a34.689 15.337 24.171 0 0 -40.537 -3.377 34.689 15.337 24.171 0 0 20.948 27.995 34.689 15.337 24.171 0 0 40.535 3.3759 34.689 15.337 24.171 0 0 -20.946 -27.993zm-3.6737 4.6169a21.68 9.5854 24.171 0 1 13.091 17.494 21.68 9.5854 24.171 0 1 -25.334 -2.1086 21.68 9.5854 24.171 0 1 -13.092 -17.497 21.68 9.5854 24.171 0 1 25.334 2.1114z"
						fill={theme.logoPalette.pink}
					/>
					<path
						d="m-70.072-94.546-42.118 1.7788 30.888 48.896z"
						fill={theme.logoPalette.blue}
						fillOpacity=".7451"
					/>
					<ellipse
						cx="213.85"
						cy="-73.164"
						rx="12.979"
						ry="10.393"
						fill={theme.logoPalette.green}
						fillOpacity=".7451"
					/>
					<path
						d="m51.861-29.947c-3e-3 -3.9036-3.4066-11.125 0.77668-14.499 2.9554-2.3834 12.598 18.859 17.289 11.466 2.3064-3.6354 7.3668-23.361 11.424-22.063 8.462 2.707 6.0675 13.091 13.177 15.366 8.4066 2.6893 15.047-14.048 15.949-16.659 1.1668-3.3769 10.691 1.9812 11.26 2.1633 0.6109 0.19542 5.6158-6.3554 6.2981-6.9775"
						fill="none"
						stroke={theme.logoPalette.blue}
						strokeLinecap="round"
						strokeOpacity=".7451"
						strokeWidth="7.8465"
					/>
					<path
						d="m234.58 21.923a11.796 27.947 72.856 0 1 -32.037 -1.3761 11.796 27.947 72.856 0 1 20.597 -19.697 11.796 27.947 72.856 0 1 32.035 1.3767 11.796 27.947 72.856 0 1 -20.595 19.697zm-2.1455-3.9521a7.3727 17.467 72.856 0 0 12.871 -12.309 7.3727 17.467 72.856 0 0 -20.021 -0.86133 7.3727 17.467 72.856 0 0 -12.872 12.311 7.3727 17.467 72.856 0 0 20.022 0.85933z"
						fill={theme.logoPalette.orange}
					/>
					<path
						d="m236.35 18.439a11.796 27.947 72.856 0 1 -32.037 -1.3761 11.796 27.947 72.856 0 1 20.597 -19.697 11.796 27.947 72.856 0 1 32.035 1.3767 11.796 27.947 72.856 0 1 -20.595 19.697zm-2.1455-3.9521a7.3727 17.467 72.856 0 0 12.871 -12.309 7.3727 17.467 72.856 0 0 -20.021 -0.86137 7.3727 17.467 72.856 0 0 -12.872 12.311 7.3727 17.467 72.856 0 0 20.022 0.85931z"
						fill={theme.logoPalette.pink}
					/>
					<path
						d="m282.48-73.784-40.305 14.771 1.2416 15.595-25.66 21.993 38.296-16.506-2.0419-14.16z"
						fill="#f2b28f"
						fillOpacity=".7451"
					/>
					<path
						d="m344.77-29.882 33.006-21.025 7.6685 30.236z"
						fill={theme.logoPalette.pink}
						fillOpacity=".7451"
					/>
					<ellipse
						transform="scale(-1,1)"
						cx="-412.47"
						cy="-63.633"
						rx="12.979"
						ry="10.393"
						fill={theme.logoPalette.blue}
						fillOpacity=".7451"
					/>
					<path
						d="m283.06 14.009 33.006-21.025 7.6684 30.236z"
						fill={theme.logoPalette.blue}
						fillOpacity=".7451"
					/>
					<ellipse
						cx="383.36"
						cy="9.6565"
						rx="12.979"
						ry="10.393"
						fill={theme.logoPalette.green}
						fillOpacity=".7451"
					/>
					<path
						d="m147.6-27.984 33.006-21.025 7.6684 30.236z"
						fill={theme.logoPalette.blue}
						fillOpacity=".7451"
					/>
					<ellipse
						cx="145.91"
						cy="-83.505"
						rx="12.979"
						ry="10.393"
						fill={theme.logoPalette.orange}
						fillOpacity=".7451"
					/>
					<path
						d="m-244.04-67.339 25.849-26.525-38.553-5.2834z"
						fill={theme.logoPalette.pink}
						fillOpacity=".7451"
					/>
					<ellipse
						transform="matrix(.031769 .9995 -.99981 .01973 0 0)"
						cx="-85.817"
						cy="198.74"
						rx="10.229"
						ry="13.189"
						fill={theme.logoPalette.blue}
						fillOpacity=".7451"
					/>
					<path
						d="m-168.42-89.15c16.502 14.964 24.553 40.317 31.153 60.86 1.3624 4.2407-8.5377-5.4933-11.034-9.3535-5.3801-8.318-14.057-21.999-23.057-26.015-6.2204-2.7754 2.1944 11.914 1.0766 17.758-1.0271 5.3696-15.024-16.18-14.646-10.743 0.19044 2.7351 0.32681 4.5955 1.8919 8.8185 8.4755 22.871-4.6702 1.5866-5.6862 3.2222-1.9979 3.2163 2.3238 11.277-5.1337 6.5699-9.4688-5.9764-8.5325-3.9396-14.745 8.4839"
						fill="none"
						stroke={theme.logoPalette.green}
						strokeLinecap="round"
						strokeOpacity=".7451"
						strokeWidth="7.1874"
					/>
					<ellipse
						cx="-367.42"
						cy="-96.174"
						rx="12.979"
						ry="10.393"
						fill={theme.logoPalette.green}
						fillOpacity=".7451"
					/>
					<path
						d="m0.81135-82.22-33.006-21.025-7.6684 30.236z"
						fill={theme.logoPalette.pink}
						fillOpacity=".7451"
					/>
					<path
						d="m-197.17 5.036a11.796 27.947 72.856 0 1 -32.037 -1.3761 11.796 27.947 72.856 0 1 20.597 -19.697 11.796 27.947 72.856 0 1 32.035 1.3767 11.796 27.947 72.856 0 1 -20.595 19.697zm-2.1455-3.9521a7.3727 17.467 72.856 0 0 12.871 -12.309 7.3727 17.467 72.856 0 0 -20.021 -0.86133 7.3727 17.467 72.856 0 0 -12.872 12.311 7.3727 17.467 72.856 0 0 20.022 0.85933z"
						fill={theme.logoPalette.orange}
					/>
					<path
						d="m-195.4 1.5524a11.796 27.947 72.856 0 1 -32.037 -1.3761 11.796 27.947 72.856 0 1 20.597 -19.697 11.796 27.947 72.856 0 1 32.035 1.3767 11.796 27.947 72.856 0 1 -20.595 19.697zm-2.1454-3.9521a7.3727 17.467 72.856 0 0 12.871 -12.309 7.3727 17.467 72.856 0 0 -20.021 -0.86137 7.3727 17.467 72.856 0 0 -12.872 12.311 7.3727 17.467 72.856 0 0 20.022 0.85932z"
						fill={theme.logoPalette.pink}
					/>
					<path
						d="m98.814 15.929 33.006-21.025 7.6685 30.236z"
						fill={theme.logoPalette.green}
						fillOpacity=".7451"
					/>
					<ellipse
						transform="scale(-1,1)"
						cx="19.275"
						cy="-53.983"
						rx="12.979"
						ry="10.393"
						fill={theme.logoPalette.blue}
						fillOpacity=".7451"
					/>
					<path
						d="m-148.69 23.659 33.006-21.025 7.6684 30.236z"
						fill={theme.logoPalette.blue}
						fillOpacity=".7451"
					/>
					<ellipse
						cx="-48.39"
						cy="19.307"
						rx="12.979"
						ry="10.393"
						fill={theme.logoPalette.pink}
					/>
					<path
						d="m-321.18-38.477-33.006-21.025-7.6684 30.236z"
						fill={theme.logoPalette.pink}
						fillOpacity=".7451"
					/>
					<ellipse
						transform="scale(-1,1)"
						cx="341.27"
						cy="-3.8242"
						rx="12.979"
						ry="10.393"
						fill={theme.logoPalette.blue}
						fillOpacity=".7451"
					/>
					<path
						d="m-284.15-11.918 33.006-21.025 7.6684 30.236z"
						fill={theme.logoPalette.blue}
						fillOpacity=".7451"
					/>
					<ellipse
						cx="-282.3"
						cy="37.388"
						rx="12.979"
						ry="10.393"
						fill={theme.logoPalette.green}
						fillOpacity=".7451"
					/>
					<ellipse
						cx="-285.84"
						cy="-73.855"
						rx="12.979"
						ry="10.393"
						fill={theme.logoPalette.orange}
						fillOpacity=".7451"
					/>
					<path
						d="m97.055-72.404-33.006-21.025-7.6684 30.236z"
						fill={theme.logoPalette.orange}
						fillOpacity=".7451"
					/>
					<path
						d="m91.305-21.557-40.305 14.771 1.2416 15.595-25.66 21.993 38.296-16.506-2.0419-14.16z"
						fill={theme.logoPalette.blue}
						fillOpacity=".7451"
					/>
				</g>
				<g transform="rotate(90 -299.8 768.67)" className={'background'}>
					<path
						d="m-765.75-32.059 25.849-26.525-38.553-5.2834z"
						fill={theme.logoPalette.pink}
						fillOpacity=".7451"
					/>
					<ellipse
						transform="matrix(.031769 .9995 -.99981 .01973 0 0)"
						cx="-60.836"
						cy="721.35"
						rx="10.229"
						ry="13.189"
						fill={theme.logoPalette.blue}
						fillOpacity=".7451"
					/>
					<path
						d="m-690.13-53.87c16.502 14.964 24.553 40.317 31.153 60.86 1.3624 4.2407-8.5377-5.4933-11.034-9.3535-5.3801-8.318-14.057-21.999-23.057-26.015-6.2204-2.7754 2.1944 11.914 1.0766 17.758-1.0271 5.3696-15.024-16.18-14.646-10.743 0.19044 2.7351 0.32681 4.5955 1.8919 8.8185 8.4755 22.871-4.6702 1.5866-5.6862 3.2222-1.9979 3.2163 2.3238 11.277-5.1337 6.5699-9.4688-5.9764-8.5325-3.9396-14.745 8.4839"
						fill="none"
						stroke={theme.logoPalette.green}
						strokeLinecap="round"
						strokeOpacity=".7451"
						strokeWidth="7.1874"
					/>
					<ellipse
						cx="-889.13"
						cy="-60.895"
						rx="12.979"
						ry="10.393"
						fill={theme.logoPalette.green}
						fillOpacity=".7451"
					/>
					<path
						d="m-718.88 40.316a11.796 27.947 72.856 0 1 -32.037 -1.3761 11.796 27.947 72.856 0 1 20.597 -19.697 11.796 27.947 72.856 0 1 32.035 1.3767 11.796 27.947 72.856 0 1 -20.595 19.697zm-2.1455-3.9521a7.3727 17.467 72.856 0 0 12.871 -12.309 7.3727 17.467 72.856 0 0 -20.021 -0.86133 7.3727 17.467 72.856 0 0 -12.872 12.311 7.3727 17.467 72.856 0 0 20.022 0.85933z"
						fill={theme.logoPalette.orange}
					/>
					<path
						d="m-717.11 36.832a11.796 27.947 72.856 0 1 -32.037 -1.3761 11.796 27.947 72.856 0 1 20.597 -19.697 11.796 27.947 72.856 0 1 32.035 1.3767 11.796 27.947 72.856 0 1 -20.595 19.697zm-2.1454-3.9521a7.3727 17.467 72.856 0 0 12.871 -12.309 7.3727 17.467 72.856 0 0 -20.021 -0.86137 7.3727 17.467 72.856 0 0 -12.872 12.311 7.3727 17.467 72.856 0 0 20.022 0.85932z"
						fill={theme.logoPalette.pink}
					/>
					<path
						d="m-670.4 58.939 33.006-21.025 7.6684 30.236z"
						fill={theme.logoPalette.blue}
						fillOpacity=".7451"
					/>
					<path
						d="m-842.89-3.1971-33.006-21.025-7.6684 30.236z"
						fill={theme.logoPalette.pink}
						fillOpacity=".7451"
					/>
					<ellipse
						transform="scale(-1,1)"
						cx="862.98"
						cy="31.455"
						rx="12.979"
						ry="10.393"
						fill={theme.logoPalette.blue}
						fillOpacity=".7451"
					/>
					<path
						d="m-805.86 23.361 33.006-21.025 7.6684 30.236z"
						fill={theme.logoPalette.blue}
						fillOpacity=".7451"
					/>
					<ellipse
						cx="-807.55"
						cy="-38.575"
						rx="12.979"
						ry="10.393"
						fill={theme.logoPalette.orange}
						fillOpacity=".7451"
					/>
				</g>
				<g className={'background'}>
					<path
						transform="translate(-7.4835 28.331)"
						d="m425.61-88.056c2.3347-3.1285 3.932-10.951 9.3024-11.148 3.7942-0.13969-1.1999 22.649 6.9839 19.535 4.0239-1.5311 19.887-14.301 22.36-10.833 5.1572 7.2344-2.9778 14.118 1.3554 20.197 5.1234 7.187 20.463-2.2432 22.749-3.7947 2.9563-2.0063 7.377 7.9874 7.7239 8.4741 0.37232 0.52227 8.303-1.7284 9.222-1.8182"
						fill="none"
						stroke={theme.logoPalette.orange}
						strokeLinecap="round"
						strokeOpacity=".7451"
						strokeWidth="7.8465"
					/>
					<path
						d="m457.06 44.203-26.525-25.849-5.2834 38.553z"
						fill={theme.logoPalette.pink}
						fillOpacity=".7451"
					/>
					<ellipse
						transform="matrix(.9995 -.031769 .01973 .99981 0 0)"
						cx="442.46"
						cy="15.656"
						rx="10.229"
						ry="13.189"
						fill={theme.logoPalette.blue}
						fillOpacity=".7451"
					/>
					<ellipse
						transform="rotate(-90)"
						cx="-167.59"
						cy="428.22"
						rx="12.979"
						ry="10.393"
						fill={theme.logoPalette.green}
						fillOpacity=".7451"
					/>
					<path
						d="m529.43-2.6651a27.947 11.796 72.856 0 1 -1.3761 32.037 27.947 11.796 72.856 0 1 -19.697 -20.597 27.947 11.796 72.856 0 1 1.3767 -32.035 27.947 11.796 72.856 0 1 19.697 20.595zm-3.9521 2.1455a17.467 7.3727 72.856 0 0 -12.309 -12.871 17.467 7.3727 72.856 0 0 -0.86133 20.021 17.467 7.3727 72.856 0 0 12.311 12.872 17.467 7.3727 72.856 0 0 0.85933 -20.022z"
						fill={theme.logoPalette.orange}
					/>
					<path
						d="m525.95-4.4333a27.947 11.796 72.856 0 1 -1.376 32.037 27.947 11.796 72.856 0 1 -19.697 -20.597 27.947 11.796 72.856 0 1 1.3767 -32.035 27.947 11.796 72.856 0 1 19.697 20.595zm-3.9521 2.1454a17.467 7.3727 72.856 0 0 -12.309 -12.871 17.467 7.3727 72.856 0 0 -0.86137 20.021 17.467 7.3727 72.856 0 0 12.311 12.872 17.467 7.3727 72.856 0 0 0.85931 -20.022z"
						fill={theme.logoPalette.pink}
					/>
					<path
						d="m538.53-34.212-21.025-33.006 30.236-7.6684z"
						fill={theme.logoPalette.blue}
						fillOpacity=".7451"
					/>
					<path
						d="m485.92 121.35-21.025 33.006 30.236 7.6684z"
						fill={theme.logoPalette.pink}
						fillOpacity=".7451"
					/>
					<ellipse
						transform="matrix(0,1,1,0,0,0)"
						cx="141.43"
						cy="520.57"
						rx="12.979"
						ry="10.393"
						fill={theme.logoPalette.blue}
						fillOpacity=".7451"
					/>
					<path
						d="m512.48 84.313-21.025-33.006 30.236-7.6684z"
						fill={theme.logoPalette.blue}
						fillOpacity=".7451"
					/>
					<ellipse
						transform="rotate(-90)"
						cx="-86.008"
						cy="450.54"
						rx="12.979"
						ry="10.393"
						fill={theme.logoPalette.orange}
						fillOpacity=".7451"
					/>
				</g>
				<g transform="matrix(-1 0 0 1 34.94 20.312)" className={'background'}>
					<g transform="rotate(90 -299.8 768.67)">
						<path
							d="m-765.75-32.059 25.849-26.525-38.553-5.2834z"
							fill={theme.logoPalette.pink}
							fillOpacity=".7451"
						/>
						<ellipse
							transform="matrix(.031769 .9995 -.99981 .01973 0 0)"
							cx="-60.836"
							cy="721.35"
							rx="10.229"
							ry="13.189"
							fill={theme.logoPalette.blue}
							fillOpacity=".7451"
						/>
						<path
							d="m-690.13-53.87c16.502 14.964 24.553 40.317 31.153 60.86 1.3624 4.2407-8.5377-5.4933-11.034-9.3535-5.3801-8.318-14.057-21.999-23.057-26.015-6.2204-2.7754 2.1944 11.914 1.0766 17.758-1.0271 5.3696-15.024-16.18-14.646-10.743 0.19044 2.7351 0.32681 4.5955 1.8919 8.8185 8.4755 22.871-4.6702 1.5866-5.6862 3.2222-1.9979 3.2163 2.3238 11.277-5.1337 6.5699-9.4688-5.9764-8.5325-3.9396-14.745 8.4839"
							fill="none"
							stroke={theme.logoPalette.green}
							strokeLinecap="round"
							strokeOpacity=".7451"
							strokeWidth="7.1874"
						/>
						<ellipse
							cx="-889.13"
							cy="-60.895"
							rx="12.979"
							ry="10.393"
							fill={theme.logoPalette.green}
							fillOpacity=".7451"
						/>
						<path
							d="m-718.88 40.316a11.796 27.947 72.856 0 1 -32.037 -1.3761 11.796 27.947 72.856 0 1 20.597 -19.697 11.796 27.947 72.856 0 1 32.035 1.3767 11.796 27.947 72.856 0 1 -20.595 19.697zm-2.1455-3.9521a7.3727 17.467 72.856 0 0 12.871 -12.309 7.3727 17.467 72.856 0 0 -20.021 -0.86133 7.3727 17.467 72.856 0 0 -12.872 12.311 7.3727 17.467 72.856 0 0 20.022 0.85933z"
							fill={theme.logoPalette.orange}
						/>
						<path
							d="m-717.11 36.832a11.796 27.947 72.856 0 1 -32.037 -1.3761 11.796 27.947 72.856 0 1 20.597 -19.697 11.796 27.947 72.856 0 1 32.035 1.3767 11.796 27.947 72.856 0 1 -20.595 19.697zm-2.1454-3.9521a7.3727 17.467 72.856 0 0 12.871 -12.309 7.3727 17.467 72.856 0 0 -20.021 -0.86137 7.3727 17.467 72.856 0 0 -12.872 12.311 7.3727 17.467 72.856 0 0 20.022 0.85932z"
							fill={theme.logoPalette.pink}
						/>
						<path
							d="m-842.89-3.1971-33.006-21.025-7.6684 30.236z"
							fill={theme.logoPalette.pink}
							fillOpacity=".7451"
						/>
						<ellipse
							transform="scale(-1,1)"
							cx="862.98"
							cy="31.455"
							rx="12.979"
							ry="10.393"
							fill={theme.logoPalette.blue}
							fillOpacity=".7451"
						/>
						<path
							d="m-805.86 23.361 33.006-21.025 7.6684 30.236z"
							fill={theme.logoPalette.blue}
							fillOpacity=".7451"
						/>
						<ellipse
							cx="-807.55"
							cy="-38.575"
							rx="12.979"
							ry="10.393"
							fill={theme.logoPalette.orange}
							fillOpacity=".7451"
						/>
					</g>
					<path
						transform="translate(-7.4835 28.331)"
						d="m425.61-88.056c2.3347-3.1285 3.932-10.951 9.3024-11.148 3.7942-0.13969-1.1999 22.649 6.9839 19.535 4.0239-1.5311 19.887-14.301 22.36-10.833 5.1572 7.2344-2.9778 14.118 1.3554 20.197 5.1234 7.187 20.463-2.2432 22.749-3.7947 2.9563-2.0063 7.377 7.9874 7.7239 8.4741 0.37232 0.52227 8.303-1.7284 9.222-1.8182"
						fill="none"
						stroke={theme.logoPalette.orange}
						strokeLinecap="round"
						strokeOpacity=".7451"
						strokeWidth="7.8465"
					/>
					<path
						d="m457.06 44.203-26.525-25.849-5.2834 38.553z"
						fill={theme.logoPalette.pink}
						fillOpacity=".7451"
					/>
					<ellipse
						transform="matrix(.9995 -.031769 .01973 .99981 0 0)"
						cx="442.46"
						cy="15.656"
						rx="10.229"
						ry="13.189"
						fill={theme.logoPalette.blue}
						fillOpacity=".7451"
					/>
					<ellipse
						transform="rotate(-90)"
						cx="-167.59"
						cy="428.22"
						rx="12.979"
						ry="10.393"
						fill={theme.logoPalette.green}
						fillOpacity=".7451"
					/>
					<path
						d="m529.43-2.6651a27.947 11.796 72.856 0 1 -1.3761 32.037 27.947 11.796 72.856 0 1 -19.697 -20.597 27.947 11.796 72.856 0 1 1.3767 -32.035 27.947 11.796 72.856 0 1 19.697 20.595zm-3.9521 2.1455a17.467 7.3727 72.856 0 0 -12.309 -12.871 17.467 7.3727 72.856 0 0 -0.86133 20.021 17.467 7.3727 72.856 0 0 12.311 12.872 17.467 7.3727 72.856 0 0 0.85933 -20.022z"
						fill={theme.logoPalette.orange}
					/>
					<path
						d="m525.95-4.4333a27.947 11.796 72.856 0 1 -1.376 32.037 27.947 11.796 72.856 0 1 -19.697 -20.597 27.947 11.796 72.856 0 1 1.3767 -32.035 27.947 11.796 72.856 0 1 19.697 20.595zm-3.9521 2.1454a17.467 7.3727 72.856 0 0 -12.309 -12.871 17.467 7.3727 72.856 0 0 -0.86137 20.021 17.467 7.3727 72.856 0 0 12.311 12.872 17.467 7.3727 72.856 0 0 0.85931 -20.022z"
						fill={theme.logoPalette.pink}
					/>
					<path
						d="m538.53-34.212-21.025-33.006 30.236-7.6684z"
						fill={theme.logoPalette.blue}
						fillOpacity=".7451"
					/>
					<path
						d="m485.92 121.35-21.025 33.006 30.236 7.6684z"
						fill={theme.logoPalette.pink}
						fillOpacity=".7451"
					/>
					<ellipse
						transform="matrix(0,1,1,0,0,0)"
						cx="141.43"
						cy="520.57"
						rx="12.979"
						ry="10.393"
						fill={theme.logoPalette.blue}
						fillOpacity=".7451"
					/>
					<path
						d="m512.48 84.313-21.025-33.006 30.236-7.6684z"
						fill={theme.logoPalette.blue}
						fillOpacity=".7451"
					/>
					<ellipse
						transform="rotate(-90)"
						cx="-86.008"
						cy="450.54"
						rx="12.979"
						ry="10.393"
						fill={theme.logoPalette.orange}
						fillOpacity=".7451"
					/>
				</g>
			</g>
		</svg>
	)
})

Logo.displayName = 'LogoBg'
export default Logo
