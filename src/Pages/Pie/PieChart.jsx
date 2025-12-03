import { Box, useTheme } from '@mui/material';
import { ResponsivePie } from '@nivo/pie'

const data = [
    {
        id: "React",
        label: "React",
        value: 272,
        color: "hsl(107, 70%, 50%)",
    },
    {
        id: "Java Script",
        label: "Java Script",
        value: 543,
        color: "hsl(64, 70%, 50%)",
    },
    {
        id: "Sass",
        label: "Sass",
        value: 401,
        color: "hsl(41, 70%, 50%)",
    },
    {
        id: "Angular",
        label: "Angular",
        value: 434,
        color: "hsl(172, 70%, 50%)",
    },
    {
        id: "Vue",
        label: "Vue",
        value: 333,
        color: "hsl(219, 70%, 50%)",
    },
];


const PieChart = () => {
    const theme = useTheme()
    return (
        <Box sx={{ height: "75vh" }} >
            <ResponsivePie /* or Pie for fixed dimensions */
                data={data}
                margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                innerRadius={0.5}
                padAngle={0.6}
                cornerRadius={2}
                activeOuterRadiusOffset={8}
                arcLinkLabelsSkipAngle={10}
                arcLinkLabelsThickness={2}
                arcLinkLabelsColor={{ from: 'color' }}
                arcLabelsSkipAngle={10}
                arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
                legends={[
                    {
                        anchor: 'bottom',
                        direction: 'row',
                        translateY: 56,
                        itemWidth: 100,
                        itemHeight: 18,
                        symbolShape: 'circle'
                    }
                ]}
                theme={{
                    "text": {
                        "fontSize": 11,
                        "fill": theme.palette.text.primary,
                        "outlineWidth": 0,
                        "outlineColor": "#ffffff"
                    },
                    "axis": {
                        "domain": {
                            "line": {
                                "stroke": "#777777",
                                "strokeWidth": 1
                            }
                        },
                        "legend": {
                            "text": {
                                "fontSize": 12,
                                "fill": theme.palette.text.primary,
                                "outlineWidth": 0,
                                "outlineColor": "#ffffff"
                            }
                        },
                        "ticks": {
                            "line": {
                                "stroke": "#777777",
                                "strokeWidth": 1
                            },
                            "text": {
                                "fontSize": 11,
                                "fill": theme.palette.text.primary,
                                "outlineWidth": 0,
                                "outlineColor": "#ffffff"
                            }
                        }
                    },
                    "grid": {
                        "line": {
                            "stroke": "#dddddd",
                            "strokeWidth": 1
                        }
                    },
                    "legends": {
                        "title": {
                            "text": {
                                "fontSize": 11,
                                "fill": theme.palette.text.primary,
                                "outlineWidth": 0,
                                "outlineColor": "#ffffff"
                            }
                        },
                        "text": {
                            "fontSize": 11,
                            "fill": theme.palette.text.primary,
                            "outlineWidth": 0,
                            "outlineColor": "#ffffff"
                        },
                        "ticks": {
                            "line": {},
                            "text": {
                                "fontSize": 10,
                                "fill": theme.palette.text.primary,
                                "outlineWidth": 0,
                                "outlineColor": "#ffffff"
                            }
                        }
                    },
                    "annotations": {
                        "text": {
                            "fontSize": 13,
                            "fill": theme.palette.text.primary,
                            "outlineWidth": 2,
                            "outlineColor": "#ffffff",
                            "outlineOpacity": 1
                        },
                        "link": {
                            "stroke": "#000000",
                            "strokeWidth": 1,
                            "outlineWidth": 2,
                            "outlineColor": "#ffffff",
                            "outlineOpacity": 1
                        },
                        "outline": {
                            "stroke": "#000000",
                            "strokeWidth": 2,
                            "outlineWidth": 2,
                            "outlineColor": "#ffffff",
                            "outlineOpacity": 1
                        },
                        "symbol": {
                            "fill": "#000000",
                            "outlineWidth": 2,
                            "outlineColor": "#ffffff",
                            "outlineOpacity": 1
                        }
                    },
                    "tooltip": {
                        "wrapper": {},
                        "container": {
                            "background": theme.palette.background.default,
                            "color": theme.palette.text.primary,
                            "fontSize": 12
                        },
                        "basic": {},
                        "chip": {},
                        "table": {},
                        "tableCell": {},
                        "tableCellValue": {}
                    }
                }}
            />
        </Box>
    )
}

export default PieChart
