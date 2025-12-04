import { Box, Paper, Stack, Typography, useTheme } from '@mui/material'
import { ResponsivePie } from '@nivo/pie'

const Card = ({ icon, title, subTitle, increase, data, schema }) => {
    const theme = useTheme()
    return (
        <Paper sx={{ flexGrow: 1, minWidth: "333px", p: 1.5, display: "flex", justifyContent: "space-between" }}>
            <Stack gap={1} >
                {icon}
                <Typography variant="body1" sx={{ fontSize: "13px" }}>{title}</Typography>
                <Typography variant="body1" sx={{ fontSize: "13px" }}>{subTitle}</Typography>
            </Stack>
            <Stack alignItems={"center"} >
                <Box height={"70px"} width={"70px"}>
                    <ResponsivePie /* or Pie for fixed dimensions */
                        data={data}
                        margin={{ top: 0, right: 0, bottom: 10, left: 0 }}
                        innerRadius={0.5}
                        padAngle={0.6}
                        cornerRadius={2}
                        activeOuterRadiusOffset={8}
                        colors={{ scheme: schema }}
                        enableArcLabels={false}
                        enableArcLinkLabels={false}
                        theme={
                            {
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
                                            "fill": theme.palette.text.secondary,
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
                <Typography variant="body1" sx={{ fontSize: "13px" }}>{increase}</Typography>
            </Stack>
        </Paper>
    )
}

export default Card
