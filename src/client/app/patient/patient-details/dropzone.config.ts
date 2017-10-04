import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';

export const dropzoneConfigVariantZip: DropzoneConfigInterface = {
  // Change this to your upload POST address:
  url: 'this.dropzoneUrlVariant',
  maxFiles: 1,
  timeout: 0,
  maxFilesize: 50000, // size in MB
  acceptedFiles: '.zip',
  addRemoveLinks: true,
  autoProcessQueue: false,
  init: function () {
    var submitButton = document.querySelector('#upload-files');
    let myDropzone = this; // closure
    submitButton.addEventListener('click', function () {
      myDropzone.processQueue(); // Tell Dropzone to process all queued files.
    });
  }
};

export const dropzoneConfigDnaBam: DropzoneConfigInterface = {
  // Change this to your upload POST address:
  url: 'this.dropzoneUrlDna',
  maxFiles: 1,
  timeout: 0,
  maxFilesize: 50000, // size in MB
  // acceptedFiles: '.bam',
  addRemoveLinks: true,
  autoProcessQueue: false,
  init: function () {
    var submitButton = document.querySelector('#upload-files');
    let myDropzone = this; // closure
    submitButton.addEventListener('click', function () {
      myDropzone.processQueue(); // Tell Dropzone to process all queued files.
    });
  }
};

export const dropzoneConfigCdnaBam: DropzoneConfigInterface = {
  // Change this to your upload POST address:
  url: 'this.dropzoneUrlCdna',
  maxFiles: 1,
  timeout: 0,
  maxFilesize: 50000, // size in MB
  // acceptedFiles: '.bam',
  addRemoveLinks: true,
  autoProcessQueue: false,
  init: function () {
    var submitButton = document.querySelector('#upload-files');
    let myDropzone = this; // closure
    submitButton.addEventListener('click', function () {
      myDropzone.processQueue(); // Tell Dropzone to process all queued files.
    });
  }
};

export const dropzoneConfigDocuments: DropzoneConfigInterface = {
  // Change this to your upload POST address:
  url: 'https://httpbin.org/post',
  // maxFiles: 3,
  // parallelUploads: 3,
  timeout: 0,
  maxFilesize: 50000, // size in MB
  // acceptedFiles: '.zip,.bam',
  addRemoveLinks: true
};
