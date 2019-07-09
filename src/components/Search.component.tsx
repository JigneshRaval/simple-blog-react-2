import React, { useRef } from 'react';
import ArticleContext from '../services/context';

const SearchComponent = (props: any) => {
    let timer: any;
    const { onFilterArticles } = props;

    const inputRef = useRef();

    const handleSubmit = (event: any) => {
        event.preventDefault();
        // console.log(event)
    }

    const filterArticles = (event: any, type: string) => {
        event.persist();
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout((ev) => {
            onFilterArticles(event, type);
        }, 1000);
    }


    return (

        <React.Fragment>

            <form className="uk-search uk-search-default uk-width-1-1" onSubmit={handleSubmit}>
                <span uk-search-icon=""></span>
                <input className="uk-search-input" name="searchBar" id="searchBar" type="text" placeholder="Search articles by Title, Tag or Category" onChange={(event) => filterArticles(event, 'search')} ref={inputRef as any} />

                <button type="button" className="close clear-search" data-dismiss="modal" aria-label="Close" onClick={(event) => { (inputRef.current as any).value = ''; filterArticles(event, 'all') }} title="Clear Search">
                    <span aria-hidden="true">&times;</span>
                </button>
            </form>

            <button className="ad2hs-prompt uk-button uk-button-primary">Add to Home</button>

        </React.Fragment>

    );
}

export default SearchComponent;
