class Polygon extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
    this.check = true;
  }



  onMouseDown(coord, event, style) {
    if (this.check == true) {
      this.contextDraft.strokeStyle = style.curCol.stroke;
      this.contextDraft.lineJoin = style.joint;
      this.contextDraft.lineWidth = style.brushSize;
      this.contextReal.strokeStyle = style.curCol.stroke;
      this.contextReal.lineJoin = style.joint;
      this.contextReal.lineWidth = style.brushSize;
      this.startX = [];
      this.startY = [];
      this.contextReal.beginPath();
      this.contextReal.moveTo(coord[0], coord[1]);
      this.check = false;
    }
  }

  onMouseUp(coord, event) {
    this.contextReal.lineTo(coord[0], coord[1]);
    this.origX = coord[0];
    this.origY = coord[1];
    this.startX.push(this.origX);
    this.startY.push(this.origY);
    if (
      Math.abs(this.origX - this.startX[0]) < 20 &&
      Math.abs(this.origY - this.startY[0]) < 20 &&
      this.startX.length > 1 &&
      this.startY.length > 1
    ) {
      this.check = true;
      this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
      this.contextReal.stroke();
      this.startX = 0;
      this.startY = 0;
      saveImage(canvasReal, storeImg);
    }
    
  }

  onMouseMove(coord, event) {
    if (this.check == false) {
      this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
      this.contextDraft.beginPath();
      this.contextDraft.moveTo(this.startX[0], this.startY[0]);
      for (let i = 0; i < this.startX.length; i++) {
        this.contextDraft.lineTo(this.startX[i], this.startY[i]);
      }
      this.contextDraft.lineTo(coord[0], coord[1]);
      this.contextDraft.stroke();
    }
  }

  onMouseLeave() {
    this.check = true;
  }
}