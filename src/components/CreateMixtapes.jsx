import React from 'react';

import PlaylistImageSelector from './PlaylistImageSelector.jsx';
import Search from './Search.jsx';
import SearchList from './SearchList.jsx';
import PlaylistBuilderList from './PlaylistBuilderList.jsx';

const CreateMixtapes = (props) => {
    const { searchResults, onSearch, onChange, onPlayVideo, onReady, tapeImages, builderImage, selectImage } = props;
    console.log(props);
    return (
        <div style={{marginTop: '4rem'}}>
            <PlaylistImageSelector tapeImages={tapeImages} selectImage={selectImage}/>
            <Search onSearch={onSearch} onChange={onChange} />
            <SearchList searchResults={searchResults} onPlayVideo={onPlayVideo} onReady={onReady}/>
            <PlaylistBuilderList builderImage={builderImage} />
            <div>Create Mixtapes Component</div>
        </div>
    )
}

export default CreateMixtapes;