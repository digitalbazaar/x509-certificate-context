/*!
 * Copyright (c) 2021 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';

module.exports = {
  '@context': {
    id: '@id',
    type: '@type',
    '@protected': true,

    x509CertificateChain: {
      '@id': 'https://w3id.org/security#x509CertificateChain',
      '@type': 'https://w3id.org/security#multibase',
      '@container': '@list'
    },
    x509CertificateFingerprint: {
      '@id': 'https://w3id.org/security#x509CertificateFingerprint',
      '@type': 'https://w3id.org/security#multibase'
    }
  }
};
