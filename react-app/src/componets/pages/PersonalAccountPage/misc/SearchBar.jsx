import './style/SearchBar.css'

function SearchBar() {
    return (
        <div id='SearchBar'>
            <form id='SearchBar-f1'>
                <select id='SearchBar-f1s1' name="">
                    <option value="">All departments</option>
                    <option value="">Appilances</option>
                    <option value="">Computers</option>
                </select>
                <input id='SearchBar-f1in1' type="text" />
                <button id='SearchBar-f1b1' type="button">O</button>
            </form>
        </div>
    )
}


export default SearchBar;