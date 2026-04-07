const angularDocLines = {
  4: {
    angular: '4.4.7',
    cli: '1.4.10',
    typescript: '2.3.4',
    rxjs: '5.5.12',
    zone: '0.8.29',
    coreJs: '2.4.1',
    usesAngularJson: false
  },
  5: {
    angular: '5.2.11',
    cli: '1.7.4',
    typescript: '2.6.2',
    rxjs: '5.5.12',
    zone: '0.8.29',
    coreJs: '2.4.1',
    usesAngularJson: false
  },
  6: {
    angular: '6.1.10',
    cli: '6.1.5',
    devkit: '0.7.5',
    typescript: '2.7.2',
    rxjs: '6.2.2',
    zone: '0.8.26',
    coreJs: '2.4.1',
    tslib: '1.9.3',
    usesAngularJson: true
  },
  7: {
    angular: '7.2.16',
    cli: '7.3.10',
    devkit: '0.13.10',
    typescript: '3.2.4',
    rxjs: '6.6.7',
    zone: '0.8.29',
    coreJs: '2.4.1',
    tslib: '1.9.3',
    usesAngularJson: true
  },
  8: {
    angular: '8.2.14',
    cli: '8.3.29',
    devkit: '0.803.29',
    typescript: '3.5.3',
    rxjs: '6.4.0',
    zone: '0.9.1',
    coreJs: '2.6.12',
    tslib: '1.9.3',
    usesAngularJson: true
  },
  9: {
    angular: '9.1.13',
    cli: '9.1.15',
    devkit: '0.901.15',
    typescript: '3.8.3',
    rxjs: '6.5.3',
    zone: '0.10.3',
    coreJs: '2.6.12',
    tslib: '1.10.0',
    usesAngularJson: true
  },
  10: {
    angular: '10.2.5',
    cli: '10.2.4',
    devkit: '0.1002.4',
    typescript: '3.9.7',
    rxjs: '6.6.7',
    zone: '0.10.3',
    coreJs: '2.6.12',
    tslib: '2.0.0',
    usesAngularJson: true
  },
  11: {
    angular: '11.2.14',
    cli: '11.2.19',
    devkit: '0.1102.19',
    typescript: '4.1.6',
    rxjs: '6.6.7',
    zone: '0.11.8',
    coreJs: '2.6.12',
    tslib: '2.0.0',
    usesAngularJson: true
  },
  12: {
    angular: '12.2.17',
    cli: '12.2.18',
    devkit: '12.2.18',
    typescript: '4.3.5',
    rxjs: '6.6.7',
    zone: '0.11.8',
    coreJs: '2.6.12',
    tslib: '2.0.0',
    usesAngularJson: true
  },
  13: {
    angular: '13.4.0',
    cli: '13.3.11',
    devkit: '13.3.11',
    typescript: '4.6.4',
    rxjs: '7.4.0',
    zone: '0.11.8',
    coreJs: '2.6.12',
    tslib: '2.0.0',
    usesAngularJson: true
  },
  14: {
    angular: '14.3.0',
    cli: '14.2.13',
    devkit: '14.2.13',
    typescript: '4.8.4',
    rxjs: '7.5.0',
    zone: '0.11.8',
    coreJs: '2.6.12',
    tslib: '2.3.0',
    usesAngularJson: true
  },
  15: {
    angular: '15.2.10',
    cli: '15.2.11',
    devkit: '15.2.11',
    typescript: '4.9.5',
    rxjs: '7.8.2',
    zone: '0.13.3',
    coreJs: '2.6.12',
    tslib: '2.3.0',
    usesAngularJson: true
  },
  16: {
    angular: '16.2.12',
    cli: '16.2.16',
    devkit: '16.2.16',
    typescript: '5.1.6',
    rxjs: '7.8.2',
    zone: '0.13.3',
    coreJs: '2.6.12',
    tslib: '2.3.0',
    usesAngularJson: true
  },
  17: {
    angular: '17.3.12',
    cli: '17.3.17',
    devkit: '17.3.17',
    typescript: '5.4.5',
    rxjs: '7.8.2',
    zone: '0.14.10',
    coreJs: '2.6.12',
    tslib: '2.3.0',
    usesAngularJson: true
  },
  18: {
    angular: '18.2.14',
    cli: '18.2.21',
    devkit: '18.2.21',
    typescript: '5.5.4',
    rxjs: '7.8.2',
    zone: '0.14.10',
    coreJs: '2.6.12',
    tslib: '2.3.0',
    usesAngularJson: true
  },
  19: {
    angular: '19.2.20',
    cli: '19.2.23',
    devkit: '19.2.23',
    typescript: '5.8.3',
    rxjs: '7.8.2',
    zone: '0.15.1',
    coreJs: '2.6.12',
    tslib: '2.3.0',
    usesAngularJson: true
  },
  20: {
    angular: '20.3.18',
    cli: '20.3.22',
    devkit: '20.3.22',
    typescript: '5.9.3',
    rxjs: '7.8.2',
    zone: '0.15.1',
    coreJs: '2.6.12',
    tslib: '2.3.0',
    usesAngularJson: true
  },
  21: {
    angular: '21.2.7',
    cli: '21.2.6',
    devkit: '21.2.6',
    typescript: '5.9.3',
    rxjs: '7.8.2',
    zone: '0.16.1',
    coreJs: '2.6.12',
    tslib: '2.3.0',
    usesAngularJson: true
  }
};

function getAngularDocLine(line) {
  return angularDocLines[String(line)] || angularDocLines[line];
}

function listAngularDocLines() {
  return Object.keys(angularDocLines).map(Number).sort((a, b) => a - b);
}

module.exports = {
  angularDocLines,
  getAngularDocLine,
  listAngularDocLines
};
