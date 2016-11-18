import { Directive, ElementRef, Input, Renderer, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[loader]'
})
export class LoaderDirective implements AfterViewInit {

  @Input('loader') set loading(loading: boolean){
    if (loading){
      this.showLoader()
    }else{
      this.hideLoader();
    }
  }

  @Input() set loadingMessage(msg: string){
    this.loadingMsg = msg
  }

  loadingDiv: any;
  messageDiv: any;
  loadingMsg: string;

  constructor(private el: ElementRef, renderer: Renderer) {
    this.loadingDiv = document.createElement('div');
    Object.assign(this.loadingDiv.style,{
      display: "none",
      position: "absolute",
      width: "100%",
      height: "100%",
      top: 0,
      left: 0,
      backgroundColor: "rgba(0,0,0,0.5)"
    });

    this.messageDiv = document.createElement('div');
    Object.assign(this.loadingDiv.style,{
      color: "white",
      width: "100%",
      textAlign: "center"
    });
    this.loadingDiv.appendChild(this.messageDiv);

  }
  ngAfterViewInit(){
    this.el.nativeElement.appendChild(this.loadingDiv);
    this.messageDiv.style.lineHeight = this.el.nativeElement.clientHeight + "px";
    this.messageDiv.innerHTML= this.loadingMsg ? this.loadingMsg : "Loading...";
  }

  showLoader(){
    this.loadingDiv.style.display = 'block';
  }

  hideLoader(){
    this.loadingDiv.style.display = 'none';
  }
}
