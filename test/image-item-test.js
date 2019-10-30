// IMPORT MODULES under test here:
// import example from '../src/example.js';
import ImageItem from '../home/image-item.js';

const test = QUnit.test;

QUnit.module('Render Image');

test('renders html from the data', assert => {
    //Arrange
    // Set up your parameters and expectations
    const image = {
        title: 'Uniwhal',
        url: 'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg',
        horns: 1,
        keyword: 'narwhal',
        description: 'A unicorn and a narwhal nuzzling their horns'
    };
    const expected = /*html*/ `
    <li class="image-item">
        <div class="info-container">
        <h2>Uniwhal</h2>
        </div>
        <div class="image-container">
        <img src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg" alt="A unicorn and a narwhal nuzzling their horns">
        </div>
        <p class="horns">1</p>
        
</li>
    `;

    //Act 
    // Call the function you're testing and set the result to a const
    const props = { image: image };
    const imageItem = new ImageItem(props);
    const html = imageItem.renderHTML();

    //Assert
    // Make assertions about what is expected valid result
    assert.htmlEqual(html, expected);
});