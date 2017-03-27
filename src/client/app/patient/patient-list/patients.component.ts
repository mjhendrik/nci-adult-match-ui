import {
  Component,
  trigger,
  state,
  style,
  transition,
  animate,
  OnInit
} from '@angular/core';

import { routerTransition } from './../../shared/router.animations';
import { GMTFilter } from './../../shared/pipes/gmt';

/**
 * This class represents the lazy loaded PatientListComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-patients',
  templateUrl: 'patients.component.html',
  styleUrls: ['patients.component.css'],
  animations: [routerTransition()],
  host: { '[@routerTransition]': '' },
  providers: [GMTFilter]
})
export class PatientListComponent {

  searchtermPatients: string = '';
  recordsPerPagePatients: number;
  tablePatientsDefaultSort: string;

  ngOnInit() {
    this.recordsPerPagePatients = 100;
    this.tablePatientsDefaultSort = 'patientSequenceNumber';

    let gmt = new GMTFilter();

    for (let i = 0; i < this.tablePatientsData.length; i++) {
      this.tablePatientsData[i].registrationDate = gmt.transform(this.tablePatientsData[i].registrationDate);
    }

    for (let i = 0; i < this.tablePatientsData.length; i++) {
      this.tablePatientsData[i].offTrialDate = gmt.transform(this.tablePatientsData[i].offTrialDate);
    }

  }

  tablePatientsData: any = [
    {
      "patientSequenceNumber": "10586",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1456419591000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10587",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1456419917000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10588",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1456420502000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10589",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1456437630000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10590",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1456437631000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10651",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1463686495000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10652",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1463690032000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10402",
      "currentStatus": "PENDING_CONFIRMATION",
      "currentStepNumber": "0",
      "diseases": "Anaplastic astrocytoma",
      "registrationDate": 1452791409071,
      "offTrialDate": null,
      "assignedTreatmentArm": "EAY131-Q",
      "assignedTreatmentArmVersion": "2016-01-20"
    },
    {
      "patientSequenceNumber": "10591",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1456437641000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10592",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1456437838000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10593",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1456497841000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10594",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1456497984000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10595",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1456759461000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10596",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1456775547000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10597",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1458062440000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10598",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1459875325000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10599",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1459875622000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10600",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1459875896000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10601",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1459876136000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10602",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1459876379000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10603",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1459876618000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10604",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1459877446000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10605",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1459877847000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10606",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1459878131000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10607",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1459878375000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10608",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1459878650000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10609",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1459878866000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10618",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1461592656000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10619",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1462818816000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10620",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1463606733000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10621",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1463666796000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10622",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1463667843000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10623",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1463671041000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10624",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1463671607000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10625",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1463674847000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10405",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1452791409071,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10403",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1452791409071,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10373",
      "currentStatus": "PENDING_CONFIRMATION",
      "currentStepNumber": "0",
      "diseases": "Kidney cancer, NOS",
      "registrationDate": 1452791409071,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10645",
      "currentStatus": "PENDING_APPROVAL",
      "currentStepNumber": "0",
      "diseases": "Glioblastoma multiforme",
      "registrationDate": 1452791409071,
      "offTrialDate": null,
      "assignedTreatmentArm": "EAY131-H",
      "assignedTreatmentArmVersion": "2016-05-31"
    },
    {
      "patientSequenceNumber": "10400",
      "currentStatus": "PENDING_CONFIRMATION",
      "currentStepNumber": "0",
      "diseases": "Bone cancer, NOS",
      "registrationDate": 1452791409071,
      "offTrialDate": null,
      "assignedTreatmentArm": "EAY131-Q",
      "assignedTreatmentArmVersion": "2016-01-20"
    },
    {
      "patientSequenceNumber": "10610",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1459879094000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10611",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1459879296000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10612",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1459879566000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10613",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1459879866000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10614",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1459880090000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10615",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1459880349000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10616",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1459880566000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10617",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1459880843000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10626",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1463675626000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10627",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1463675926000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10628",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1463676475000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10629",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1463676962000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10630",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1463677259000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10631",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1463677773000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10632",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1463678053000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10633",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1463678516000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10634",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1463678991000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10635",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1463682583000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10650",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1463686238000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10404",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1452791409071,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10636",
      "currentStatus": "ON_TREATMENT_ARM",
      "currentStepNumber": "1",
      "diseases": "Bone cancer, NOS",
      "registrationDate": 1463683035000,
      "offTrialDate": null,
      "assignedTreatmentArm": "EAY131-F",
      "assignedTreatmentArmVersion": "2016-01-20"
    },
    {
      "patientSequenceNumber": "10401",
      "currentStatus": "PENDING_CONFIRMATION",
      "currentStepNumber": "0",
      "diseases": "Hodgkin lymphoma, NOS",
      "registrationDate": 1452791409071,
      "offTrialDate": null,
      "assignedTreatmentArm": "EAY131-Q",
      "assignedTreatmentArmVersion": "2016-01-20"
    },
    {
      "patientSequenceNumber": "10377",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1449853809071,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10376",
      "currentStatus": "PENDING_CONFIRMATION",
      "currentStepNumber": "0",
      "diseases": "Pancreatic neuroendocrine tumor",
      "registrationDate": 1449853809071,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "20008",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1449853809071,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "20001",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1449853809071,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "20002",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1449853809071,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "20003",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1449853809071,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "20004",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1449853809071,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "20005",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1449853809071,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "20006",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1449853809071,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "20007",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1449853809071,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "20009",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1449853809071,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "20010",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1449853809071,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10640",
      "currentStatus": "PENDING_APPROVAL",
      "currentStepNumber": "0",
      "diseases": "Bone cancer, NOS",
      "registrationDate": 1463683853000,
      "offTrialDate": null,
      "assignedTreatmentArm": "EAY131-G",
      "assignedTreatmentArmVersion": "2016-05-31"
    },
    {
      "patientSequenceNumber": "10641",
      "currentStatus": "PENDING_CONFIRMATION",
      "currentStepNumber": "0",
      "diseases": "Craniopharyngioma",
      "registrationDate": 1463683925000,
      "offTrialDate": null,
      "assignedTreatmentArm": "EAY131-H",
      "assignedTreatmentArmVersion": "2016-05-31"
    },
    {
      "patientSequenceNumber": "10642",
      "currentStatus": "PENDING_APPROVAL",
      "currentStepNumber": "0",
      "diseases": "Endocrine cancer, NOS",
      "registrationDate": 1463683990000,
      "offTrialDate": null,
      "assignedTreatmentArm": "EAY131-T",
      "assignedTreatmentArmVersion": "2016-01-20"
    },
    {
      "patientSequenceNumber": "10643",
      "currentStatus": "PENDING_APPROVAL",
      "currentStepNumber": "0",
      "diseases": "Pituitary gland cancer, NOS",
      "registrationDate": 1463684062000,
      "offTrialDate": null,
      "assignedTreatmentArm": "EAY131-U",
      "assignedTreatmentArmVersion": "2016-05-31"
    },
    {
      "patientSequenceNumber": "10644",
      "currentStatus": "PENDING_CONFIRMATION",
      "currentStepNumber": "0",
      "diseases": "Chondrosarcoma",
      "registrationDate": 1452791409071,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10653",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1464098785000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10654",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1464198546000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10655",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1464793495000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10658",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1465499636000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10659",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1465570595000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10649",
      "currentStatus": "PENDING_CONFIRMATION",
      "currentStepNumber": "0",
      "diseases": "Diffuse brainstem glioma",
      "registrationDate": 1452791409071,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10647",
      "currentStatus": "PENDING_CONFIRMATION",
      "currentStepNumber": "0",
      "diseases": "Anaplastic astrocytoma",
      "registrationDate": 1463684431000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10648",
      "currentStatus": "PENDING_APPROVAL",
      "currentStepNumber": "0",
      "diseases": "Glioblastoma multiforme",
      "registrationDate": 1463684675000,
      "offTrialDate": null,
      "assignedTreatmentArm": "EAY131-Z1D",
      "assignedTreatmentArmVersion": "05-03-2016"
    },
    {
      "patientSequenceNumber": "10374",
      "currentStatus": "PENDING_CONFIRMATION",
      "currentStepNumber": "0",
      "diseases": "Testicular seminoma",
      "registrationDate": 1452791409071,
      "offTrialDate": null,
      "assignedTreatmentArm": "EAY131-Z1D",
      "assignedTreatmentArmVersion": "05-03-2016"
    },
    {
      "patientSequenceNumber": "10639",
      "currentStatus": "PENDING_APPROVAL",
      "currentStepNumber": "0",
      "diseases": "Bone cancer, NOS",
      "registrationDate": 1452791409071,
      "offTrialDate": null,
      "assignedTreatmentArm": "EAY131-W",
      "assignedTreatmentArmVersion": "05-03-2016"
    },
    {
      "patientSequenceNumber": "10646",
      "currentStatus": "PENDING_APPROVAL",
      "currentStepNumber": "0",
      "diseases": "Head & neck cancer, NOS",
      "registrationDate": 1452791409071,
      "offTrialDate": null,
      "assignedTreatmentArm": "EAY131-Z1B",
      "assignedTreatmentArmVersion": "05-03-2016"
    },
    {
      "patientSequenceNumber": "10637",
      "currentStatus": "ON_TREATMENT_ARM",
      "currentStepNumber": "1",
      "diseases": "Adenocarcinoma - small intest.",
      "registrationDate": 1452791409071,
      "offTrialDate": null,
      "assignedTreatmentArm": "EAY131-C1",
      "assignedTreatmentArmVersion": "05-03-2016"
    },
    {
      "patientSequenceNumber": "10638",
      "currentStatus": "ON_TREATMENT_ARM",
      "currentStepNumber": "1",
      "diseases": "Ewing sarcoma/Peripheral PNET",
      "registrationDate": 1463683319000,
      "offTrialDate": null,
      "assignedTreatmentArm": "EAY131-C2",
      "assignedTreatmentArmVersion": "05-03-2016"
    },
    {
      "patientSequenceNumber": "10657",
      "currentStatus": "PENDING_APPROVAL",
      "currentStepNumber": "0",
      "diseases": "Bone cancer, NOS",
      "registrationDate": 1452791409071,
      "offTrialDate": null,
      "assignedTreatmentArm": "EAY131-Y",
      "assignedTreatmentArmVersion": "2016-05-31"
    },
    {
      "patientSequenceNumber": "10656",
      "currentStatus": "PENDING_APPROVAL",
      "currentStepNumber": "0",
      "diseases": "Bone cancer, NOS",
      "registrationDate": 1452791409071,
      "offTrialDate": null,
      "assignedTreatmentArm": "EAY131-W",
      "assignedTreatmentArmVersion": "05-03-2016"
    },
    {
      "patientSequenceNumber": "10372",
      "currentStatus": "PENDING_CONFIRMATION",
      "currentStepNumber": "0",
      "diseases": "Hodgkin lymphoma, NOS",
      "registrationDate": 1452791409071,
      "offTrialDate": null,
      "assignedTreatmentArm": "EAY131-F",
      "assignedTreatmentArmVersion": "2016-05-31"
    },
    {
      "patientSequenceNumber": "10660",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1465835163000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10661",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1466537759000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10662",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1466538903000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10663",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1467292073000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10664",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1467427740000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10665",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1467829402000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10666",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1467996523000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10667",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1468510403000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10668",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1468511396000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10669",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1468511685000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10670",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1469018921000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10671",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1469139456000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10672",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1469140280000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10673",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1469202392000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10674",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1469670765000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10675",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1469681437000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10676",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1469732706000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10677",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1470071020000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10678",
      "currentStatus": "ON_TREATMENT_ARM",
      "currentStepNumber": "1",
      "diseases": "Bone cancer, NOS",
      "registrationDate": 1470325024000,
      "offTrialDate": null,
      "assignedTreatmentArm": "EAY131-Q",
      "assignedTreatmentArmVersion": "2016-05-31"
    },
    {
      "patientSequenceNumber": "10679",
      "currentStatus": "ON_TREATMENT_ARM",
      "currentStepNumber": "1",
      "diseases": "Breast cancer, NOS",
      "registrationDate": 1470325225000,
      "offTrialDate": null,
      "assignedTreatmentArm": "EAY131-F",
      "assignedTreatmentArmVersion": "2016-05-31"
    },
    {
      "patientSequenceNumber": "10680",
      "currentStatus": "PENDING_APPROVAL",
      "currentStepNumber": "0",
      "diseases": "Ewing sarcoma/Peripheral PNET",
      "registrationDate": 1470329208000,
      "offTrialDate": null,
      "assignedTreatmentArm": "EAY131-Q",
      "assignedTreatmentArmVersion": "2016-05-31"
    },
    {
      "patientSequenceNumber": "10681",
      "currentStatus": "ON_TREATMENT_ARM",
      "currentStepNumber": "1",
      "diseases": "Glioblastoma multiforme",
      "registrationDate": 1470330238000,
      "offTrialDate": null,
      "assignedTreatmentArm": "EAY131-F",
      "assignedTreatmentArmVersion": "2016-05-31"
    },
    {
      "patientSequenceNumber": "10682",
      "currentStatus": "ON_TREATMENT_ARM",
      "currentStepNumber": "1",
      "diseases": "Diffuse brainstem glioma",
      "registrationDate": 1470330594000,
      "offTrialDate": null,
      "assignedTreatmentArm": "EAY131-F",
      "assignedTreatmentArmVersion": "2016-05-31"
    },
    {
      "patientSequenceNumber": "10683",
      "currentStatus": "ON_TREATMENT_ARM",
      "currentStepNumber": "1",
      "diseases": "Ewing sarcoma/Peripheral PNET",
      "registrationDate": 1470330727000,
      "offTrialDate": null,
      "assignedTreatmentArm": "EAY131-Q",
      "assignedTreatmentArmVersion": "2016-05-31"
    },
    {
      "patientSequenceNumber": "10684",
      "currentStatus": "ON_TREATMENT_ARM",
      "currentStepNumber": "1",
      "diseases": "Breast cancer, NOS",
      "registrationDate": 1470330959000,
      "offTrialDate": null,
      "assignedTreatmentArm": "EAY131-F",
      "assignedTreatmentArmVersion": "2016-05-31"
    },
    {
      "patientSequenceNumber": "10685",
      "currentStatus": "ON_TREATMENT_ARM",
      "currentStepNumber": "1",
      "diseases": "Diffuse brainstem glioma",
      "registrationDate": 1470334648000,
      "offTrialDate": null,
      "assignedTreatmentArm": "EAY131-Q",
      "assignedTreatmentArmVersion": "2016-05-31"
    },
    {
      "patientSequenceNumber": "10686",
      "currentStatus": "ON_TREATMENT_ARM",
      "currentStepNumber": "1",
      "diseases": "Inflammatory breast carcinoma",
      "registrationDate": 1470336499000,
      "offTrialDate": null,
      "assignedTreatmentArm": "EAY131-F",
      "assignedTreatmentArmVersion": "2016-05-31"
    },
    {
      "patientSequenceNumber": "10687",
      "currentStatus": "ON_TREATMENT_ARM",
      "currentStepNumber": "1",
      "diseases": "Ewing sarcoma/Peripheral PNET",
      "registrationDate": 1470336905000,
      "offTrialDate": null,
      "assignedTreatmentArm": "EAY131-Q",
      "assignedTreatmentArmVersion": "2016-05-31"
    },
    {
      "patientSequenceNumber": "10688",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1470665536000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10689",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1470686574000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "77777",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1468900800000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10690",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1470772839000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10691",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1470774978000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10692",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1470790086000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10693",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1470847813000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10694",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1470852862000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10695",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1471304859000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10696",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1471374131000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10697",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1471374333000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10698",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1471374793000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10699",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1471540252000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10700",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1471548349000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10701",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1471553994000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10702",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1471554861000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10703",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1471979597000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10704",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1472074474000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10705",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1472075411000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10706",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1472138229000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10707",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1472168623000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10708",
      "currentStatus": "PENDING_APPROVAL",
      "currentStepNumber": "0",
      "diseases": "Solitary plasmacytoma",
      "registrationDate": 1472500922000,
      "offTrialDate": null,
      "assignedTreatmentArm": "EAY131-Z1D",
      "assignedTreatmentArmVersion": "05-03-2016"
    },
    {
      "patientSequenceNumber": "10709",
      "currentStatus": "PENDING_APPROVAL",
      "currentStepNumber": "0",
      "diseases": "Bone cancer, NOS",
      "registrationDate": 1472502742000,
      "offTrialDate": null,
      "assignedTreatmentArm": "EAY131-Z1A",
      "assignedTreatmentArmVersion": "05-03-2016"
    },
    {
      "patientSequenceNumber": "10710",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1472778447000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10711",
      "currentStatus": "PENDING_APPROVAL",
      "currentStepNumber": "0",
      "diseases": "Bone cancer, NOS",
      "registrationDate": 1473794133000,
      "offTrialDate": null,
      "assignedTreatmentArm": "EAY131-Q",
      "assignedTreatmentArmVersion": "2016-05-31"
    },
    {
      "patientSequenceNumber": "10712",
      "currentStatus": "PENDING_APPROVAL",
      "currentStepNumber": "0",
      "diseases": "Chondrosarcoma",
      "registrationDate": 1473794299000,
      "offTrialDate": null,
      "assignedTreatmentArm": "EAY131-Q",
      "assignedTreatmentArmVersion": "2016-05-31"
    },
    {
      "patientSequenceNumber": "10713",
      "currentStatus": "OFF_TRIAL_NO_TA_AVAILABLE",
      "currentStepNumber": "0",
      "diseases": "Ewing sarcoma/Peripheral PNET",
      "registrationDate": 1473794473000,
      "offTrialDate": 1473968893723,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10714",
      "currentStatus": "PENDING_APPROVAL",
      "currentStepNumber": "0",
      "diseases": "Breast cancer, NOS",
      "registrationDate": 1473794662000,
      "offTrialDate": null,
      "assignedTreatmentArm": "EAY131-F",
      "assignedTreatmentArmVersion": "2016-05-31"
    },
    {
      "patientSequenceNumber": "10715",
      "currentStatus": "PENDING_APPROVAL",
      "currentStepNumber": "0",
      "diseases": "Diffuse brainstem glioma",
      "registrationDate": 1473795017000,
      "offTrialDate": null,
      "assignedTreatmentArm": "EAY131-Q",
      "assignedTreatmentArmVersion": "2016-05-31"
    },
    {
      "patientSequenceNumber": "10716",
      "currentStatus": "OFF_TRIAL_NO_TA_AVAILABLE",
      "currentStepNumber": "0",
      "diseases": "Fibrillary astrocytoma",
      "registrationDate": 1473795220000,
      "offTrialDate": 1473968528512,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10717",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1474392465000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10718",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1474476990000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10719",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1474480593000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10720",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1474490804000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10721",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1474491287000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10722",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1474552968000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10723",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1474568651000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10724",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1474568917000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10725",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1474570834000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10726",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1474923970000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10727",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1475104520000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10728",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1476210629000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10729",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1476213691000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10730",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1476896942000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10731",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1477431508000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10732",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1477506128000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10733",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1477509620000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10734",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1477562770000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10735",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1477584632000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10736",
      "currentStatus": "COMPASSIONATE_CARE",
      "currentStepNumber": "0",
      "diseases": "Bone cancer, NOS",
      "registrationDate": 1478033802000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10737",
      "currentStatus": "PENDING_APPROVAL",
      "currentStepNumber": "0",
      "diseases": "Bone cancer, NOS",
      "registrationDate": 1478114535000,
      "offTrialDate": null,
      "assignedTreatmentArm": "EAY131-F",
      "assignedTreatmentArmVersion": "2016-05-31"
    },
    {
      "patientSequenceNumber": "10738",
      "currentStatus": "OFF_TRIAL_NO_TA_AVAILABLE",
      "currentStepNumber": "0",
      "diseases": "Bone cancer, NOS",
      "registrationDate": 1478184161000,
      "offTrialDate": 1478274594393,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10739",
      "currentStatus": "COMPASSIONATE_CARE",
      "currentStepNumber": "0",
      "diseases": "Bone cancer, NOS",
      "registrationDate": 1478185596000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10740",
      "currentStatus": "ON_TREATMENT_ARM",
      "currentStepNumber": "1",
      "diseases": "Bone cancer, NOS",
      "registrationDate": 1478200009000,
      "offTrialDate": null,
      "assignedTreatmentArm": "EAY131-WX1",
      "assignedTreatmentArmVersion": "2016-11-18"
    },
    {
      "patientSequenceNumber": "10741",
      "currentStatus": "PENDING_CONFIRMATION",
      "currentStepNumber": "0",
      "diseases": "Bone cancer, NOS",
      "registrationDate": 1478200247000,
      "offTrialDate": null,
      "assignedTreatmentArm": "EAY131-IX1",
      "assignedTreatmentArmVersion": "2016-11-18"
    },
    {
      "patientSequenceNumber": "10742",
      "currentStatus": "PENDING_CONFIRMATION",
      "currentStepNumber": "0",
      "diseases": "Bone cancer, NOS",
      "registrationDate": 1478200442000,
      "offTrialDate": null,
      "assignedTreatmentArm": "EAY131-I",
      "assignedTreatmentArmVersion": "2016-11-18"
    },
    {
      "patientSequenceNumber": "10743",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1478794930000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10744",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1479415105000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10745",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1479416275000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10746",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1479756523000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10747",
      "currentStatus": "OFF_TRIAL_DECEASED",
      "currentStepNumber": "0",
      "diseases": "Bone cancer, NOS",
      "registrationDate": 1479927765000,
      "offTrialDate": 1480433036995,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10748",
      "currentStatus": "ON_TREATMENT_ARM",
      "currentStepNumber": "1",
      "diseases": "Bone cancer, NOS",
      "registrationDate": 1479927961000,
      "offTrialDate": null,
      "assignedTreatmentArm": "EAY131-IX1",
      "assignedTreatmentArmVersion": "2016-11-18"
    },
    {
      "patientSequenceNumber": "10749",
      "currentStatus": "ON_TREATMENT_ARM",
      "currentStepNumber": "1",
      "diseases": "Bone cancer, NOS",
      "registrationDate": 1480346704000,
      "offTrialDate": null,
      "assignedTreatmentArm": "EAY131-IX1",
      "assignedTreatmentArmVersion": "2016-11-18"
    },
    {
      "patientSequenceNumber": "10750",
      "currentStatus": "REJOIN_REQUESTED",
      "currentStepNumber": "0",
      "diseases": "Bone cancer, NOS",
      "registrationDate": 1480348315000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10751",
      "currentStatus": "ON_TREATMENT_ARM",
      "currentStepNumber": "1",
      "diseases": "Bone cancer, NOS",
      "registrationDate": 1480349055000,
      "offTrialDate": null,
      "assignedTreatmentArm": "EAY131-WX1",
      "assignedTreatmentArmVersion": "2016-11-18"
    },
    {
      "patientSequenceNumber": "10752",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1480699185000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10753",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1480974353000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10754",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1481124185000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10755",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1481662233000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10756",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1481662594000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10757",
      "currentStatus": "ON_TREATMENT_ARM",
      "currentStepNumber": "1",
      "diseases": "Diffuse brainstem glioma",
      "registrationDate": 1481662836000,
      "offTrialDate": null,
      "assignedTreatmentArm": "EAY131-A",
      "assignedTreatmentArmVersion": "2016-11-18"
    },
    {
      "patientSequenceNumber": "10758",
      "currentStatus": "OFF_TRIAL_NO_TA_AVAILABLE",
      "currentStepNumber": "0",
      "diseases": "High-grade astrocytoma, NOS",
      "registrationDate": 1481662881000,
      "offTrialDate": 1481828323167,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10759",
      "currentStatus": "ON_TREATMENT_ARM",
      "currentStepNumber": "1",
      "diseases": "Anaplastic astrocytoma",
      "registrationDate": 1481662963000,
      "offTrialDate": null,
      "assignedTreatmentArm": "EAY131-N",
      "assignedTreatmentArmVersion": "2016-11-18"
    },
    {
      "patientSequenceNumber": "10760",
      "currentStatus": "ON_TREATMENT_ARM",
      "currentStepNumber": "1",
      "diseases": "Ovarian dysgerminoma",
      "registrationDate": 1481663005000,
      "offTrialDate": null,
      "assignedTreatmentArm": "EAY131-P",
      "assignedTreatmentArmVersion": "2016-11-18"
    },
    {
      "patientSequenceNumber": "10761",
      "currentStatus": "PENDING_CONFIRMATION",
      "currentStepNumber": "0",
      "diseases": "Endometrial stromal sarcoma",
      "registrationDate": 1481663150000,
      "offTrialDate": null,
      "assignedTreatmentArm": "EAY131-W",
      "assignedTreatmentArmVersion": "2016-11-27"
    },
    {
      "patientSequenceNumber": "10762",
      "currentStatus": "ON_TREATMENT_ARM",
      "currentStepNumber": "1",
      "diseases": "Osteosarcoma",
      "registrationDate": 1481663193000,
      "offTrialDate": null,
      "assignedTreatmentArm": "EAY131-X",
      "assignedTreatmentArmVersion": "2016-01-20"
    },
    {
      "patientSequenceNumber": "10763",
      "currentStatus": "PENDING_CONFIRMATION",
      "currentStepNumber": "0",
      "diseases": "Invasive breast carcinoma",
      "registrationDate": 1481663243000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10764",
      "currentStatus": "ON_TREATMENT_ARM",
      "currentStepNumber": "1",
      "diseases": "Bone cancer, NOS",
      "registrationDate": 1481664133000,
      "offTrialDate": null,
      "assignedTreatmentArm": "EAY131-I",
      "assignedTreatmentArmVersion": "2016-11-18"
    },
    {
      "patientSequenceNumber": "10765",
      "currentStatus": "PENDING_APPROVAL",
      "currentStepNumber": "0",
      "diseases": "Serous endometrial adenocarcinoma",
      "registrationDate": 1481664701000,
      "offTrialDate": null,
      "assignedTreatmentArm": "EAY131-N",
      "assignedTreatmentArmVersion": "2016-11-18"
    },
    {
      "patientSequenceNumber": "10766",
      "currentStatus": "PENDING_APPROVAL",
      "currentStepNumber": "0",
      "diseases": "H & N squamous cell car., NOS",
      "registrationDate": 1481665134000,
      "offTrialDate": null,
      "assignedTreatmentArm": "EAY131-P",
      "assignedTreatmentArmVersion": "2016-11-18"
    },
    {
      "patientSequenceNumber": "10767",
      "currentStatus": "ON_TREATMENT_ARM",
      "currentStepNumber": "1",
      "diseases": "Low-grade astrocytoma, NOS",
      "registrationDate": 1481665354000,
      "offTrialDate": null,
      "assignedTreatmentArm": "EAY131-W",
      "assignedTreatmentArmVersion": "2016-11-27"
    },
    {
      "patientSequenceNumber": "10768",
      "currentStatus": "PENDING_APPROVAL",
      "currentStepNumber": "0",
      "diseases": "Endometrial stromal sarcoma",
      "registrationDate": 1481665578000,
      "offTrialDate": null,
      "assignedTreatmentArm": "EAY131-X",
      "assignedTreatmentArmVersion": "2016-01-20"
    },
    {
      "patientSequenceNumber": "10769",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1452791409071,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10770",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1481730495000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10771",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1481730689000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10772",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1481730886000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10773",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1481731076000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10774",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1481731265000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10775",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1481743303000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10776",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1481750615000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10777",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1481751580000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10778",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1481841930000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10779",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1481921931000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10780",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1482421042000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10781",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1483141410000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10782",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1483533332000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10783",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1483661351000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10784",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1484057213000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10785",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1484064708000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10786",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1484065182000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10787",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1484065516000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10788",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1484066266000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10789",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1484066557000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10790",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1484067908000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10791",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1484068303000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10792",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1484068690000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10793",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1484071468000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10794",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1484071717000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10795",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1484071924000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10796",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1484072159000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10797",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1484073693000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10798",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1484075209000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10799",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1484075557000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10800",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1484075824000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10801",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1484076068000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10802",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1484766877000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10803",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1484767281000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10804",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1484767774000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10805",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1484768729000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10806",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1484769381000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10807",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1484769968000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10808",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1484773741000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10809",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1484779201000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10810",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1485184313000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10811",
      "currentStatus": "REGISTRATION",
      "currentStepNumber": "0",
      "diseases": "",
      "registrationDate": 1485288855000,
      "offTrialDate": null,
      "assignedTreatmentArm": null,
      "assignedTreatmentArmVersion": null
    },
    {
      "patientSequenceNumber": "10812",
      "currentStatus": "PENDING_CONFIRMATION",
      "currentStepNumber": "0",
      "diseases": "Bone cancer, NOS",
      "registrationDate": 1487191960000,
      "offTrialDate": null,
      "assignedTreatmentArm": "EAY131-Q",
      "assignedTreatmentArmVersion": "2017-01-12"
    },
    {
      "patientSequenceNumber": "10813",
      "currentStatus": "PENDING_APPROVAL",
      "currentStepNumber": "0",
      "diseases": "Bone cancer, NOS",
      "registrationDate": 1487192171000,
      "offTrialDate": null,
      "assignedTreatmentArm": "EAY131-Q",
      "assignedTreatmentArmVersion": "2017-01-12"
    },
    {
      "patientSequenceNumber": "10814",
      "currentStatus": "PENDING_APPROVAL",
      "currentStepNumber": "0",
      "diseases": "Bone cancer, NOS",
      "registrationDate": 1487192665000,
      "offTrialDate": null,
      "assignedTreatmentArm": "EAY131-F",
      "assignedTreatmentArmVersion": "2016-11-18"
    },
    {
      "patientSequenceNumber": "10815",
      "currentStatus": "PENDING_APPROVAL",
      "currentStepNumber": "0",
      "diseases": "Bone cancer, NOS",
      "registrationDate": 1487193005000,
      "offTrialDate": null,
      "assignedTreatmentArm": "EAY131-Q",
      "assignedTreatmentArmVersion": "2017-01-12"
    },
    {
      "patientSequenceNumber": "10816",
      "currentStatus": "PENDING_APPROVAL",
      "currentStepNumber": "0",
      "diseases": "Bone cancer, NOS",
      "registrationDate": 1487193058000,
      "offTrialDate": null,
      "assignedTreatmentArm": "EAY131-F",
      "assignedTreatmentArmVersion": "2016-11-18"
    }
  ]
}
