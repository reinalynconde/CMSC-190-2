class Image {
  src: String;
  full: String;
  thumb: String;

  constructor(thuumb, fuull, public state = "inactive") {
    this.thumb = thuumb;
    this.full = fuull;
    this.src = this.thumb;
  }

  toggleState() {
    this.state = this.state === 'active' ? 'inactive' : 'active';

    if(this.state == 'active')
    	this.src = this.full;
    else this.src = this.thumb;
  }
}

export default Image;