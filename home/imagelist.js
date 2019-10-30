import Component from '../component.js';
import ImageItem from './image-item.js';

class ImageList extends Component {

    renderHTML() {
        return /*html*/`
        <ul class="images"></ul>
        `;
    }

    onRender(dom) {
        const images = this.props.images;

        images.forEach(image => {
            const props = { image: image };
            const imageItem = new ImageItem(props);
            const imageItemDOM = imageItem.renderDOM();
            dom.appendChild(imageItemDOM);
        });
    }
}

export default ImageList;