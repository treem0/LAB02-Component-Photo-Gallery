import Component from '../component.js';

class ImageItem extends Component {
    renderHTML() {
        const image = this.props.image;

        return /*html*/`
        <li class="image-item">
            <div class="info-container">
            <h2>${image.title}</h2>
        </div>

        <div class="image-container">
            <img src="${image.url}" alt="${image.description}">
        </div>
        <p class="horns">${image.horns}</p>
        </li>
        `;


    }
}

export default ImageItem;