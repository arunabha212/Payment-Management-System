<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
   <xsl:template match="/">
      <html>
         <head>
            <h1 style="text-align:center">Payment Details</h1>
         </head>
         <body>
            <table border="2" align="center">
               <tr>
                  <th>Details</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Payment-status</th>
                  <th>Duration</th>
                  <th>date</th>
               </tr>
                <xsl:for-each select = "order-list/order-items">
				<xsl:sort select="details"></xsl:sort>
                    <tr>
                        <td><xsl:value-of select= "details"/></td>
                        <td><xsl:value-of select= "quantity"/></td>
                        <td><xsl:value-of select= "price"/></td>
                        
                        <td><xsl:value-of select= "payment-status"/></td>
                        <td><xsl:value-of select= "duration"/></td>
                        <xsl:choose >
                        <xsl:when test="number(translate(date, '-', '')) > number(translate('2021-05-13', '-', ''))">
                        	<xsl:apply-templates select="date"/>
                        </xsl:when>
                        <xsl:otherwise>
                        	<td><xsl:value-of select= "date"/></td>
                        </xsl:otherwise>
                        </xsl:choose>
                      </tr>
                </xsl:for-each>
             
            </table>
            <h1 style="text-align:center">Pending Payments</h1>
            <table border="2" align="center">
               <tr>
                  <th>Details</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Payment-status</th>
                  <th>Duration</th>
                  <th>date</th>
               </tr>
               <xsl:for-each select="order-list/order-items">
               <xsl:if test="payment-status='pending'">
               <tr>
               		<td><xsl:value-of select= "details"/></td>
                        <td><xsl:value-of select= "quantity"/></td>
                        <td><xsl:value-of select= "price"/></td>
                        <td><xsl:value-of select= "payment-status"/></td>
                        <td><xsl:value-of select= "duration"/></td>
                        <td><xsl:value-of select= "date"/></td>
               </tr>
               </xsl:if>
               </xsl:for-each>
              </table>
         </body>
      </html>
   </xsl:template>
   <xsl:template match="date">
        <td bgcolor="#FFDF00"><xsl:value-of select= "."/></td>
   </xsl:template>
</xsl:stylesheet>