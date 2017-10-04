import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';

export const dropzoneConfigVariantZip: DropzoneConfigInterface = {
  // Change this to your upload POST address:
  url: 'this.dropzoneUrl',
  maxFiles: 1,
  timeout: 0,
  maxFilesize: 50000, // size in MB
  acceptedFiles: '.zip',
  addRemoveLinks: true,
  autoProcessQueue: true,
  // init: function () {
  //   var submitButton = document.querySelector('#act-on-upload');
  //   let myDropzone = this;
  //   submitButton.addEventListener('success', function () {
  //     myDropzone.processQueue();
  //   });
  //   myDropzone.on('addedfile', function (file: any) {
  //     if (!file.type.match(/image.*/)) {
  //       if (file.type.match(/application.zip/)) {
  //         myDropzone.emit('thumbnail', file, 'path/to/img');
  //       } else {
  //         myDropzone.emit('thumbnail', file, 'path/to/img');
  //       }
  //     }
  //   });
  //   myDropzone.on('complete', function (file: any) {
  //     myDropzone.removeFile(file);
  //   });
  // },
  // init: function () {
  //   this.on('removedfile', function (file: any) {
  //     // delete from our dict removed file
  //     //delete addedFilesHash[file];
  //   });
  // },
  // accept: function (file: any, done: any) {
  //   // var _id = count++;
  //   // file._id = _id;
  //   // addedFilesHash[_id] = done;
  // }
};

// console.log(dropzoneConfigVariantZip.autoProcessQueue);

export const dropzoneConfigDnaBam: DropzoneConfigInterface = {
  // Change this to your upload POST address:
  url: 'this.dropzoneUrl',
  maxFiles: 1,
  timeout: 0,
  maxFilesize: 50000, // size in MB
  // acceptedFiles: '.bam',
  addRemoveLinks: true,
  autoProcessQueue: true,
  // init: function () {
  //   var submitButton = document.querySelector('#act-on-upload');
  //   let myDropzone = this;
  //   submitButton.addEventListener('success', function () {
  //     myDropzone.processQueue();
  //   });
  //   myDropzone.on('addedfile', function (file: any) {
  //     if (!file.type.match(/image.*/)) {
  //       if (file.type.match(/application.zip/)) {
  //         myDropzone.emit('thumbnail', file, 'path/to/img');
  //       } else {
  //         myDropzone.emit('thumbnail', file, 'path/to/img');
  //       }
  //     }
  //   });
  //   myDropzone.on('complete', function (file: any) {
  //     myDropzone.removeFile(file);
  //   });
  // },
  // init: function () {
  //   this.on('removedfile', function (file: any) {
  //     // delete from our dict removed file
  //     //delete addedFilesHash[file];
  //   });
  // },
  // accept: function (file: any, done: any) {
  //   // var _id = count++;
  //   // file._id = _id;
  //   // addedFilesHash[_id] = done;
  // }
};

export const dropzoneConfigCdnaBam: DropzoneConfigInterface = {
  // Change this to your upload POST address:
  url: 'this.dropzoneUrl',
  maxFiles: 1,
  timeout: 0,
  maxFilesize: 50000, // size in MB
  // acceptedFiles: '.bam',
  addRemoveLinks: true,
  autoProcessQueue: true,
  // init: function () {
  //   var submitButton = document.querySelector('#act-on-upload');
  //   let myDropzone = this;
  //   submitButton.addEventListener('success', function () {
  //     myDropzone.processQueue();
  //   });
  //   myDropzone.on('addedfile', function (file: any) {
  //     if (!file.type.match(/image.*/)) {
  //       if (file.type.match(/application.zip/)) {
  //         myDropzone.emit('thumbnail', file, 'path/to/img');
  //       } else {
  //         myDropzone.emit('thumbnail', file, 'path/to/img');
  //       }
  //     }
  //   });
  //   myDropzone.on('complete', function (file: any) {
  //     myDropzone.removeFile(file);
  //   });
  // },
  // init: function () {
  //   this.on('removedfile', function (file: any) {
  //     // delete from our dict removed file
  //     //delete addedFilesHash[file];
  //   });
  // },
  // accept: function (file: any, done: any) {
  //   // var _id = count++;
  //   // file._id = _id;
  //   // addedFilesHash[_id] = done;
  // }
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
