<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="/">
		<!-- TODO: Auto-generated template -->
		<html>
         <head>
            <h1 style="text-align:center; colour:red;">Employee Management System</h1>
            <style>
            *{
    			font-family: Muli,BlinkMacSystemFont,-apple-system,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue","Helvetica","Arial",sans-serif;
  			}
           	 table { 
				width: 1000px; 
				border-collapse: collapse; 
				margin:50px auto;
			}
			td{
			text-align:center;
			}
			tr:nth-of-type(odd) { 
			background: #eee; 
			}
            </style>
         </head>
         <body>
            <table border="0" align="center">
               <tr>
                  <th bgcolor="#FFDF00">ID</th>
                  <th bgcolor="#FFDF00">NAME</th>
                  <th bgcolor="#FFDF00">AGE</th>
                  <th bgcolor="#FFDF00">SALARY</th>
                  <th bgcolor="#FFDF00">EMAIL</th>
                  <th bgcolor="#FFDF00">MobNum</th>
                  <th bgcolor="#FFDF00">Designation</th>
                  <th bgcolor="#FFDF00" >Promotion</th>
               </tr>
                <xsl:for-each select = "Company/Employee">
                    <tr>
                        <td><xsl:value-of select= "@ID"/></td>
                        <td><xsl:value-of select= "NAME"/></td>
                        <td><xsl:value-of select= "AGE"/></td>
                        <td><xsl:value-of select= "SALARY"/></td>
                        <td><xsl:value-of select= "EMAIL"/></td>
                        <td><xsl:value-of select= "MobNum"/></td>
                        <td><xsl:value-of select= "Designation"/></td>
                        <xsl:choose>
                        <xsl:when test="AGE &gt;=50">
                        	<td bgcolor="#90EE90">Associate Project Manager</td>
                        </xsl:when>
                          <xsl:when test="(AGE &gt;= 40) and (AGE &lt;=49) ">
                        	<td bgcolor="#FFB6C1">Team Leader</td>
                        </xsl:when>
                        <xsl:otherwise>
                        	<td bgcolor="#ADD8E6">Developer</td>
                        </xsl:otherwise>
                        </xsl:choose>
                      </tr>
                </xsl:for-each>
             
            </table>
         </body>
      </html>
</xsl:template>
</xsl:stylesheet>