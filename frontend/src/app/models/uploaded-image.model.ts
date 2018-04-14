class UploadedImage {
  data: any;
  name: String;
  dimmed: Boolean;
  hidden: Boolean;
  file: File;

  constructor(public state = "inactive") {
    this.dimmed = false;
    this.hidden = false;
  }

  toggleState() {
    this.state = this.state === 'active' ? 'inactive' : 'active';
    this.hidden = true;
  }

  overlay() {
    this.dimmed = true;
  }

  no_overlay() {
    this.dimmed = false;
  }
}

export default UploadedImage;