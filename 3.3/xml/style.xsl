<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="solar">
        <html>
            <title>Title</title>
            <style>
                { font-family: Arial ,sans-serif; } table { background-color: #ffc843; color: #141414; margin: auto; }
                th, td { padding: 5px; text-align: center; } th:nth-child(1) { text-align: left; } body { display: flex;
                min-height: 100%; margin: 0; } thead { background-color: #ff6a43; color: white; }
            </style> 
            <body>
                <table>
                    <thead>
                        <tr>
                            <th>
                            </th>
                            <xsl:for-each select="planet">
                                <th>
                                    <xsl:value-of select="@caption"/>
                                </th>
                            </xsl:for-each>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>
                                Расстояние от солнца (
                                <xsl:value-of select="*/distance/@unit"/>
                                )
                            </th>
                            <xsl:for-each select="planet">
                                <td>
                                    <xsl:value-of select="distance"/>
                                </td>
                            </xsl:for-each>
                        </tr>
                        <tr>
                            <th>
                                Период обращения (
                                <xsl:value-of select="*/circulation_period/@unit"/>
                                )
                            </th>
                            <xsl:for-each select="planet">
                                <td>
                                    <xsl:value-of select="circulation_period"/>
                                </td>
                            </xsl:for-each>
                        </tr>
                        <tr>
                            <th>
                                Период вращения вокруг своей оси (
                                <xsl:value-of select="*/revolution_period/@unit"/>
                                )
                            </th>
                            <xsl:for-each select="planet">
                                <td>
                                    <xsl:value-of select="revolution_period"/>
                                </td>
                            </xsl:for-each>
                        </tr>
                        <tr>
                            <th>
                                Масса относительно земли (
                                <xsl:value-of select="*/weight/@unit"/>
                                )
                            </th>
                            <xsl:for-each select="planet">
                                <td>
                                    <xsl:value-of select="weight"/>
                                </td>
                            </xsl:for-each>
                        </tr>
                        <tr>
                            <th>
                                Диаметр (
                                <xsl:value-of select="*/diametr/@unit"/>
                                )
                            </th>
                            <xsl:for-each select="planet">
                                <td>
                                    <xsl:value-of select="distance"/>
                                </td>
                            </xsl:for-each>
                        </tr>
                        <tr>
                            <th>Количество спутников</th>
                            <xsl:for-each select="planet">
                                <td>
                                    <xsl:value-of select="satellite_number"/>
                                </td>
                            </xsl:for-each>
                        </tr>
                    </tbody>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>