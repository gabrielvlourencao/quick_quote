export class DownloadHelper {
    private static clickLink: HTMLAnchorElement;
  
    public static downloadFile(
      blobParts: BlobPart[],
      fileName: string,
      type: string = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    ) {
  
      const newBlob = new Blob(blobParts, { type: type });
  
      const nav = (window.navigator as any);
      if (nav.navigator && nav.msSaveOrOpenBlob) {
        nav.navigator.msSaveOrOpenBlob(newBlob, fileName);
        return;
      }
      
      const data = window.URL.createObjectURL(newBlob);
      this.createTempLink(fileName, data);
    }
  
    private static createTempLink(fileName: string, data: string) {
      this.clickLink = document.createElement('a');
      this.clickLink.href = data;
  
      this.clickLink['download'] = fileName;
  
      this.clickLink.target = '_blank';
  
      this.fixFirefoxTempLink(data);
    }
  
    private static fixFirefoxTempLink(data: string) {
      this.clickLastedFirefox();
      this.removeLinkFirefox(data);
    }
  
    private static clickLastedFirefox() {
      this.clickLink.dispatchEvent(
        new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
          view: window,
        })
      );
    }
  
    private static removeLinkFirefox(data: string) {
      var click = this.clickLink;
      setTimeout(function () {
        window.URL.revokeObjectURL(data);
        if (click) {
          click.remove();
        }
      }, 100);
    }
  }
  