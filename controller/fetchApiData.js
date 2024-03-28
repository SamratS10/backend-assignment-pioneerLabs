import ApiDataModel from "../model/apiSchema.js"
const fetchDataAndInsert = async()=>{
    try{
        const url = "https://api.publicapis.org/entries"
        const options = {
            method:"GET"
        }
        const response = await fetch(url,options)
        const data = await response.json()
        const {count,entries} = data
        const documents = entries.map((each)=>({
            API:each.API,
            Description:each.Description,
            Auth:each.Auth,
            HTTPS:each.HTTPS,
            Cors:each.Cors,
            Link:each.Link,
            Category:each.Category
        }))
        const inserApiData = await ApiDataModel.insertMany(documents)
        console.log("Data inserted successfully")
    }
    catch(e){
        console.log(e.message,"error while inserting")
    }
}

export default fetchDataAndInsert