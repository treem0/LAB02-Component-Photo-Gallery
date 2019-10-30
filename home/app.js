import Component from '../component.js';
import images from '../data/images.js';
import Header from './header.js';
import ImageList from './imagelist.js';
import FilterImages from './filter-images.js';

class App extends Component {

    onRender(dom) {
        const header = new Header({
            person: 'travis',
    
        });
        const headerDOM = header.renderDOM();
        dom.prepend(headerDOM);

        const props = {
            images: images
        };
        
        const imageList = new ImageList(props);
        const imageListDOM = imageList.renderDOM();
        
        const listSection = dom.querySelector('.list-section');
        listSection.appendChild(imageListDOM);

        const filterImages = new FilterImages({
            images: images,
            onFilter: (imageType) => {
                let filteredImages;
                if (!imageType) {
                    filteredImages = images;
                }
                else {
                    filteredImages = images.filter(image => {
                        return image.keyword === imageType;
                    });
                }

                const updateProps = { images: filteredImages };
                imageList.update(updateProps);
            }
        });

        const filterImagesDOM = filterImages.renderDOM();

        const optionsSection = dom.querySelector('.options-section');
        optionsSection.appendChild(filterImagesDOM);
    }

    renderHTML() {
        return /*html*/`
        <div>
            <!-- Header Goes Here -->

            <main> 
                <section class="options-section">
                    <!-- FilterImages goes here -->
                </section>

                <section class="list-section">
                    <!-- ImageList goes here -->
                </section>
            </main>
        </div>
    `;
    }
}

export default App;