import asyncio
import pandas as pd
from gql import Client, gql
from gql.transport.aiohttp import AIOHTTPTransport

deployment_id = "0.0.22"
subgraph_url = "https://api.thegraph.com/subgraphs/name/schmidsi/sound-subgraph" #FIXME

#query to get recent drops 
query1 = """ query MyQuery2 {
  editions(first: 1000, orderBy: startTime, orderDirection: desc) {
    id
    editionId
    numSold
    price
    quantity
    startTime
    artist{
        name
        id
    }
    tokens(first: 1) {
      uri
    }
  }
}
"""

def get_query_from_artist(artist):
    query = """
            query MyQuery {editions(first:1000, orderBy:endTime, orderDirection:desc
        where:{artist:""" + '"'+ artist + '"}' + """
            ){
                id artist {name} price numSold editionId
                uri tokens{
                id uri 
                }
            }
            } 
        """
    return query

async def get_subgraph_data_async(query_text):

    transport = AIOHTTPTransport(
        url=f"{subgraph_url}", 
        headers={}
    )
    # Using `async with` on the client will start a connection on the transport
    # and provide a `session` variable to execute queries on this connection
    async with Client(
        transport=transport, fetch_schema_from_transport=True,
    ) as session:
        #print(query_text)
        # Execute single query
        query = gql(
           query_text
        )

        params = {}

        result = await session.execute(query, variable_values=params)
        return result