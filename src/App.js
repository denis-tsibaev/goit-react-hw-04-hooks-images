import React, { useEffect, useState } from 'react';
import imageApi from './Api';
import Button from './Button';
import Container from './Container';
import ImageGallery from './ImageGallery';
import Modal from './Modal';
import Searchbar from './Searchbar';
import Spinner from './Spinner';

export default function App() {
    const [query, setQuery] = useState('');
    const [hits, setHits] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [modal, setModal] = useState(false);
    const [modalImage, setModalImage] = useState('');
    const [isloading, setIsloading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchImg();
    }, [query]);

    const fetchImg = () => {
        const option = { query, currentPage };
        if (!query) return;

        setIsloading(true);

        imageApi(option).then(result => {
            setHits(prevState => [...prevState.hits, ...result]);
            setCurrentPage(prevState => prevState.currentPage + 1);
        });

        window
            .scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: 'smooth',
            })

            .catch(setError({ error }))
            .finally(() => {
                setIsloading(false);
            });
    };

    const handleInputChange = data => {
        setQuery(data.trim());
        setCurrenPage(1);
        setHits([]);
    };

    const handleModalOPen = largeImage => {
        setModal(true);
        setModalImage(largeImage);
        window.addEventListener('keydown', this.handleModalEscape);
    };

    const handleBackdropClick = e => {
        if (e.target.classList.contains('Overlay')) resetModal();
        return;
    };

    const handleModalEscape = e => {
        if (e.keyCode === 27) resetModal();
    };

    const resetModal = () => {
        setModal(false);
        setModalImage('');
    };

    return (
        <>
            <Container>
                <Searchbar onSubmit={handleInputChange} />

                {query && (
                    <ImageGallery hits={hits} onImageClick={handleModalOPen} />
                )}

                {hits.length > 0 && (
                    <Button onLoadClick={fetchImg} text="Load more" />
                )}

                {isLoading && <Spinner />}

                {modal && (
                    <Modal
                        onClose={handleModalEscape}
                        handleBackdropClick={handleBackdropClick}
                    >
                        <img src={modalImage} alt="" />
                    </Modal>
                )}
            </Container>
        </>
    );
}

// class App extends Component {
//     state = {
//         query: '',
//         hits: [],
//         currentPage: 1,
//         modal: false,
//         modalImage: '',
//         isLoading: false,
//         error: null,
//     };

//     componentDidUpdate(prevProps, prevState) {
//         if (prevState.query !== this.state.query) {
//             this.fetchImg();
//         }
//     }

//     handleInputChange = data => {
//         this.setState({ query: data.trim(), currenPage: 1, hits: [] });
//     };

//     fetchImg = () => {
//         const { query, currentPage } = this.state;
//         const option = { query, currentPage };
//         if (!query) return;

//         this.setState({ isLoading: true });

//         imageApi(option)
//             .then(result => {
//                 this.setState(prevState => ({
//                     hits: [...prevState.hits, ...result],
//                     currentPage: prevState.currentPage + 1,
//                 }));

//                 window.scrollTo({
//                     top: document.documentElement.scrollHeight,
//                     behavior: 'smooth',
//                 });
//             })
//             .catch(error => this.setState({ error }))
//             .finally(() => {
//                 this.setState({ isLoading: false });
//             });
//     };

//     handleModalOPen = largeImage => {
//         this.setState({ modal: true, modalImage: largeImage });
//         window.addEventListener('keydown', this.handleModalEscape);
//     };

//     handleBackdropClick = e => {
//         if (e.target.classList.contains('Overlay')) this.resetModal();
//         return;
//     };

//     handleModalEscape = e => {
//         if (e.keyCode === 27) this.resetModal();
//     };

//     resetModal = () => {
//         this.setState({ modal: false, modalImage: '' });
//     };

//     render() {
//         const { hits, query, modal, modalImage, isLoading } = this.state;
//         const {
//             handleInputChange,
//             handleModalOPen,
//             fetchImg,
//             handleModalEscape,
//             handleBackdropClick,
//         } = this;

//         return (
//             <>
//                 <Container>
//                     <Searchbar onSubmit={handleInputChange} />

//                     {query && (
//                         <ImageGallery
//                             hits={hits}
//                             onImageClick={handleModalOPen}
//                         />
//                     )}

//                     {hits.length > 0 && (
//                         <Button onLoadClick={fetchImg} text="Load more" />
//                     )}

//                     {isLoading && <Spinner />}

//                     {modal && (
//                         <Modal
//                             onClose={handleModalEscape}
//                             handleBackdropClick={handleBackdropClick}
//                         >
//                             <img src={modalImage} alt="" />
//                         </Modal>
//                     )}
//                 </Container>
//             </>
//         );
//     }
// }

// export default App;
