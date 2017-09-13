import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { Config } from '../../shared/config/env.config';

export const dropzoneConfigCdnaBam: DropzoneConfigInterface = {

  // Change this to your upload POST address:
  server: Config.API.MESSAGE + '/message/clia/aliquot/presign_url',
  maxFiles: 1,
  maxFilesize: 50000, // size in MB
  acceptedFiles: '.bam',
  addRemoveLinks: true,
  autoProcessQueue: false,
  init: function () {
    this.on('removedfile', function (file: any) {
      // delete from our dict removed file
      //delete addedFilesHash[file];
    });
  },
  accept: function (file: any, done: any) {
    // var _id = count++;
    // file._id = _id;
    // addedFilesHash[_id] = done;
  }
};

export const dropzoneConfigDnaBam: DropzoneConfigInterface = {

  // Change this to your upload POST address:
  server: Config.API.MESSAGE + '/message/clia/aliquot/presign_url',
  maxFiles: 1,
  maxFilesize: 50000, // size in MB
  acceptedFiles: '.bam',
  addRemoveLinks: true,
  autoProcessQueue: false,
  init: function () {
    this.on('removedfile', function (file: any) {
      // delete from our dict removed file
      //delete addedFilesHash[file];
    });
  },
  accept: function (file: any, done: any) {
    // var _id = count++;
    // file._id = _id;
    // addedFilesHash[_id] = done;
  }

};

export const dropzoneConfigVariantZip: DropzoneConfigInterface = {

  // Change this to your upload POST address:
  server: Config.API.MESSAGE + '/message/clia/aliquot/presign_url',
  maxFiles: 1,
  maxFilesize: 50000, // size in MB
  acceptedFiles: '.zip',
  addRemoveLinks: true,
  autoProcessQueue: false,
  init: function () {
    this.on('removedfile', function (file: any) {
      // delete from our dict removed file
      //delete addedFilesHash[file];
    });
  },
  accept: function (file: any, done: any) {
    // var _id = count++;
    // file._id = _id;
    // addedFilesHash[_id] = done;
  }
};

export const dropzoneConfigDocuments: DropzoneConfigInterface = {
  // Change this to your upload POST address:
  server: 'https://httpbin.org/post',
  // maxFiles: 3,
  maxFilesize: 50000, // size in MB
  // acceptedFiles: '.zip,.bam',
  addRemoveLinks: true
};
