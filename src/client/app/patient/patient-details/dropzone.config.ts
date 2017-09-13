import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { Config } from '../../shared/config/env.config';
import { ViewDataTransformer } from '../view-data-transformer.service';

export const dropzoneConfigCdnaBam: DropzoneConfigInterface = {

  // constructor(private transformer: ViewDataTransformer) { }

  // Change this to your upload POST address:
  server: Config.API.MESSAGE + '/message/clia/aliquot/presign_url', // url:
  maxFiles: 1,
  maxFilesize: 50000, // size in MB
  headers:
  {
    "molecularSequenceNumber": "{{sendout.molecularSequenceNumber}}",
    "analysisId": "{{analysis.analysisId}}",
    "filename": "cDNA.bam"
  },
  // acceptedFiles: '.bam',
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
  server: Config.API.MESSAGE + '/message/clia/aliquot/presign_url', // url:
  maxFiles: 1,
  maxFilesize: 50000, // size in MB
  headers:
  {
    "molecularSequenceNumber": "{{sendout.molecularSequenceNumber}}",
    "analysisId": "{{analysis.analysisId}}",
    "filename": "DNA.bam"
  },
  // acceptedFiles: '.bam',
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
  server: Config.API.MESSAGE + '/message/clia/aliquot/presign_url', // url:
  maxFiles: 1,
  maxFilesize: 50000, // size in MB
  headers:
  {
    "molecularSequenceNumber": "{{sendout.molecularSequenceNumber}}",
    "analysisId": "{{analysis.analysisId}}",
    "filename": "Variant.zip"
  },
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
  server: 'https://httpbin.org/post', // url:
  // maxFiles: 3,
  maxFilesize: 50000, // size in MB
  // acceptedFiles: '.zip,.bam',
  addRemoveLinks: true
};
