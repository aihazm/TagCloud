/**
 * @owner Aiham Azmeh (aaz)
 */
define( [], function () {
	return {
		type: "items",
		component: "accordion",
		items: {
			dimensions: {
				uses: "dimensions",
				min: 1,
				max: 1
			},
			measures: {
				uses: "measures",
				min: 1,
				max: 1
			},
			sorting: {
				uses: "sorting"
			},
			settings: {
				uses: "settings",
				items: {
					fonts: {
						type: "items",
						label: "Fonts",
						items: {
							minFontSize: {
								ref: "fontSize.min",
								translation: "Min Font Size",
								type: "number",
								defaultValue: 8
							},
							maxFontSize: {
								ref: "fontSize.max",
								translation: "Max Font Size",
								type: "number",
								defaultValue: 24
							}
						}
					},
					effects: {
						type: "items",
						label: "Effects",
						items: {
							shadow: {
								ref: "effects.shadow",
								translation: "Shadow",
								type: "boolean",
								defaultValue: false
							},
							rotation: {
								ref: "effects.rotation",
								translation: "Rotation",
								type: "boolean",
								defaultValue: false
							},
							threed: {
								ref: "effects.threed",
								translation: "3D Effect",
								type: "boolean",
								defaultValue: false
							},
							glow: {
								ref: "effects.glow",
								translation: "Glow Effect",
								type: "boolean",
								defaultValue: false
							},
							stroke: {
								ref: "effects.stroke",
								translation: "Stroke Effect (only chrome)",
								type: "boolean",
								defaultValue: false
							}
						}
					}
				}
			}
		}
	};
} );