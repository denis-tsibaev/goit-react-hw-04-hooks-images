import '../styles.css';

const Searchbar = ({ onChange }) => {
    return (
        <header className="Searchbar">
            <form className="SearchForm">
                <button type="submit" className="SearchForm-button">
                    <span className="SearchForm-button-label">Search</span>
                </button>

                <input
                    className="SearchForm-input"
                    type="text"
                    autoComplete="off"
                    placeholder="Search images and photos"
                    onChange={onChange}
                />
            </form>
        </header>
    );
};

export default Searchbar;

// class Searchbar extends Component {
//     state = { query: '' };

//     handleChange = e => {
//         this.setState({ query: e.target.value });
//     };

//     handleSubmit = e => {
//         e.preventDefault();
//         this.props.onSubmit(this.state.query);
//         this.setState({ query: '' });
//     };

//     render() {
//         return (
//             <header className="Searchbar" onSubmit={this.handleSubmit}>
//                 <form className="SearchForm">
//                     <button type="submit" className="SearchForm-button">
//                         <span className="SearchForm-button-label">Search</span>
//                     </button>

//                     <input
//                         className="SearchForm-input"
//                         type="text"
//                         autoComplete="off"
//                         placeholder="Search images and photos"
//                         value={this.state.query}
//                         onChange={this.handleChange}
//                     />
//                 </form>
//             </header>
//         );
//     }
// }

// export default Searchbar;
