import Component from '../component.js';

class Header extends Component {
    renderHTML() {
        return /*html*/ `
        <header>
            <img src="/assets/horns.jpg" alt="Travis Molter">
            <h1>Image Gallery</h1>
        </header>
        `;
    }
}

export default Header;