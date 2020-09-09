// Import React dan state(hooks)
import React, {useState, useEffect} from 'react'

export default function Home() {
    // STATE atau object yang menyimpan data warna
    const [colors] = useState([
        'IndianRed', 'LightCoral', 'Salmon', 'DarkSalmon', 'Red',
        'Pink', 'LightPink', 'HotPink', 'DeepPink', 'PaleVioletRed',
        'LightSalmon', 'Coral', 'Tomato', 'DarkOrange', 'Orange',
        'Yellow', 'LemonChiffon', 'PapayaWhip', 'PeachPuff', 'Khaki',
        'Lavender', 'Thistle', 'Plum', 'Magenta', 'MediumOrchid',
        'GreenYellow', 'Chartreuse', 'Lime', 'LimeGreen', 'MediumSeaGreen',
        'Cyan', 'Aquamarine', 'Turquoise', 'DarkTurquoise', 'RoyalBlue',
        'Silver', 'DarkGray', 'Gray', 'LightSlateGray', 'SlateGray'
    ])

    // STATE atau object yang menyimpan data dark color
    const [darkColors] = useState([
        'DarkRed', 'MediumVioletRed', 'OrangeRed', 'DarkKhaki',
        'DarkMagenta', 'DarkGreen', 'DarkBlue', 'DarkSlateGray'
    ])

    // STATE atau object penyimpanan hasil input
    const [search, setSearch] = useState("");

    // STATE atau object penyimpanan hasil input yang sudah final (sudah difilter)
    const [searchResults, setSearchResults] = useState([]);

    // STATE menyimpan boolean 
    const [check, setCheck] = useState(false)

    // Function button untuk mengupdate data didalam STATE search
    const button = (e) => {
        setSearch(e.target.value)
   }

   const checkBox = (e) => {
       if (e.target.checked) {
            setCheck(true)
       }
       else {
           setCheck(false)
       }
   }

    // useEffect akan mengawasi "search" dan jika terjadi perubahan di STATE search maka akan dirender ulang
    // Melakukan pengecilan huruf inputan dan mencari data yang sesuai 
    // Update STATE searchResult sebagai hasil akhir  
   useEffect(() => {
    const results = colors.filter(color => color.toLowerCase().includes(search))
    setSearchResults(results)
   }, [search])


    // Melakukan render warna dengan MAP
    // Jika checkBox telah di ceklis akan menampilkan data pada STATE darkColors
    // Sedangkan jika tidak akan menampilkan data pada STATE colors 
    const renderColor = () => {
        return !check ? (searchResults.map( color => {
            return (
                <div style={{
                    display: "inline-block", 
                    position: "relative", 
                    width: "247px", 
                    height: "200px",
                    margin: "15px" , 
                    backgroundColor: color}}>
                    
                    <p style={{
                        textAlign: "center", 
                        marginTop: "15px",
                        color:"white", 
                        fontSize: "20px", 
                        fontWeight: "600"}}>{color}
                    </p>
                </div>
            )
        })) : (
            darkColors.map( color => {
                return (
                    <div style={{
                        display: "inline-block", 
                        position: "relative", 
                        width: "247px", 
                        height: "200px",
                        margin: "15px" , 
                        backgroundColor: color}}>
                        
                        <p style={{
                            textAlign: "center", 
                            marginTop: "15px",
                            color:"white", 
                            fontSize: "20px", 
                            fontWeight: "600"}}>{color}
                        </p>
                    </div>
                )
            }))
    }

    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" onChange={button} type="search" placeholder="Search" aria-label="Search"/>
                        <input style={{margin: "0 10px 0 30px"}} onClick={checkBox} type="checkbox" id="dark" name="dark" value="Darker"/>
                        <label for="dark" style={{color: "white"}}> Darker</label>
                    </form>
                </div>
                <h1 class="navbar-brand">Color Gallery</h1>
            </nav>
            {renderColor()}
        </div>
    )
}
