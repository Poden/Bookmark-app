import bookmarks from './bookmarks.js';
import api from './api.js';


const storeBookmarks = [
  {
    id: '7ddr',
    title: 'Title 11',
    rating: 5,
    url: 'http://www.title11.com',
    description: 'lorem ipsum dolor',
    expanded: true
  }

 ];
let error = null;
let hideCheckeditems = false;

const setError = function(error) {
  this.error = error;
};

const findById = function (id) {
  return this.storeBookmarks.find(currentItem => currentItem.id === id);
};

const addItem = function (item) {
  this.storeBookmarks.push(item);
};

const findAndUpdate = function(id, newData){
  const target = this.findById(id); 
  console.log(`target ${target}`);
  Object.assign(target, newData);
};

const findAndDelete = function (id) {
  this.items = this.items.filter(currentItem => currentItem.id !== id);
};

const toggleCheckedFilter = function () {
  this.hideCheckedItems = !this.hideCheckedItems;
};

export default {
  storeBookmarks,
  hideCheckeditems,
  findById,
  error,
  setError,
  findAndUpdate,
  addItem,
  findAndDelete,
  toggleCheckedFilter
};
