import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const csmaTheme: CustomThemeConfig = {
	name: 'csma-theme',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `Inter, Avenir, Helvetica, Arial, sans-serif;`,
		'--theme-font-family-heading': `'Bebas Neue', ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '9999px',
		'--theme-rounded-container': '8px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '0 0 0',
		'--on-secondary': '0 0 0',
		'--on-tertiary': '255 255 255',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '255 255 255',
		'--on-surface': '0 0 0',
		// =~= Theme Colors  =~=
		// primary | #ff8e58
		'--color-primary-50': '255 238 230', // #ffeee6
		'--color-primary-100': '255 232 222', // #ffe8de
		'--color-primary-200': '255 227 213', // #ffe3d5
		'--color-primary-300': '255 210 188', // #ffd2bc
		'--color-primary-400': '255 176 138', // #ffb08a
		'--color-primary-500': '255 142 88', // #ff8e58
		'--color-primary-600': '230 128 79', // #e6804f
		'--color-primary-700': '191 107 66', // #bf6b42
		'--color-primary-800': '153 85 53', // #995535
		'--color-primary-900': '125 70 43', // #7d462b
		// secondary | #92da93
		'--color-secondary-50': '239 249 239', // #eff9ef
		'--color-secondary-100': '233 248 233', // #e9f8e9
		'--color-secondary-200': '228 246 228', // #e4f6e4
		'--color-secondary-300': '211 240 212', // #d3f0d4
		'--color-secondary-400': '179 229 179', // #b3e5b3
		'--color-secondary-500': '146 218 147', // #92da93
		'--color-secondary-600': '131 196 132', // #83c484
		'--color-secondary-700': '110 164 110', // #6ea46e
		'--color-secondary-800': '88 131 88', // #588358
		'--color-secondary-900': '72 107 72', // #486b48
		// tertiary | #040622
		'--color-tertiary-50': '217 218 222', // #d9dade
		'--color-tertiary-100': '205 205 211', // #cdcdd3
		'--color-tertiary-200': '192 193 200', // #c0c1c8
		'--color-tertiary-300': '155 155 167', // #9b9ba7
		'--color-tertiary-400': '79 81 100', // #4f5164
		'--color-tertiary-500': '4 6 34', // #040622
		'--color-tertiary-600': '4 5 31', // #04051f
		'--color-tertiary-700': '3 5 26', // #03051a
		'--color-tertiary-800': '2 4 20', // #020414
		'--color-tertiary-900': '2 3 17', // #020311
		// success | #86bc7b
		'--color-success-50': '237 245 235', // #edf5eb
		'--color-success-100': '231 242 229', // #e7f2e5
		'--color-success-200': '225 238 222', // #e1eede
		'--color-success-300': '207 228 202', // #cfe4ca
		'--color-success-400': '170 208 163', // #aad0a3
		'--color-success-500': '134 188 123', // #86bc7b
		'--color-success-600': '121 169 111', // #79a96f
		'--color-success-700': '101 141 92', // #658d5c
		'--color-success-800': '80 113 74', // #50714a
		'--color-success-900': '66 92 60', // #425c3c
		// warning | #f9de7b
		'--color-warning-50': '254 250 235', // #fefaeb
		'--color-warning-100': '254 248 229', // #fef8e5
		'--color-warning-200': '254 247 222', // #fef7de
		'--color-warning-300': '253 242 202', // #fdf2ca
		'--color-warning-400': '251 232 163', // #fbe8a3
		'--color-warning-500': '249 222 123', // #f9de7b
		'--color-warning-600': '224 200 111', // #e0c86f
		'--color-warning-700': '187 167 92', // #bba75c
		'--color-warning-800': '149 133 74', // #95854a
		'--color-warning-900': '122 109 60', // #7a6d3c
		// error | #db3829
		'--color-error-50': '250 225 223', // #fae1df
		'--color-error-100': '248 215 212', // #f8d7d4
		'--color-error-200': '246 205 202', // #f6cdca
		'--color-error-300': '241 175 169', // #f1afa9
		'--color-error-400': '230 116 105', // #e67469
		'--color-error-500': '219 56 41', // #db3829
		'--color-error-600': '197 50 37', // #c53225
		'--color-error-700': '164 42 31', // #a42a1f
		'--color-error-800': '131 34 25', // #832219
		'--color-error-900': '107 27 20', // #6b1b14
		// surface | #00838f
		'--color-surface-50': '217 236 238', // #d9ecee
		'--color-surface-100': '204 230 233', // #cce6e9
		'--color-surface-200': '191 224 227', // #bfe0e3
		'--color-surface-300': '153 205 210', // #99cdd2
		'--color-surface-400': '77 168 177', // #4da8b1
		'--color-surface-500': '0 131 143', // #00838f
		'--color-surface-600': '0 118 129', // #007681
		'--color-surface-700': '0 98 107', // #00626b
		'--color-surface-800': '0 79 86', // #004f56
		'--color-surface-900': '0 64 70' // #004046
	}
};
