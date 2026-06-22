/* @ds-bundle: {"format":3,"namespace":"PersonaDesignSystem_5ca82c","components":[],"sourceHashes":{"ui_kits/dashboard/SigningModal.jsx":"6fe894d2f363","ui_kits/dashboard/components.jsx":"7fdcdbcbdf04","ui_kits/web/components.jsx":"a0a5b2e4ccfb"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.PersonaDesignSystem_5ca82c = window.PersonaDesignSystem_5ca82c || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/dashboard/SigningModal.jsx
try { (() => {
/* eslint-disable */
/* global React */
const {
  useState
} = React;

/* Signing flow modal — multi-step OTP signing. */
function SigningModal({
  doc,
  onClose
}) {
  const [step, setStep] = useState(1); // 1=review, 2=otp, 3=done
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  function setDigit(i, v) {
    const next = [...otp];
    next[i] = v.slice(-1);
    setOtp(next);
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "d-modal__scrim"
  }, /*#__PURE__*/React.createElement("div", {
    className: "d-modal"
  }, /*#__PURE__*/React.createElement("header", {
    className: "d-modal__head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "ds-overline"
  }, step === 3 ? 'Done' : 'Sign document'), /*#__PURE__*/React.createElement("h3", {
    className: "d-modal__title"
  }, doc.name)), /*#__PURE__*/React.createElement("button", {
    className: "p-btn p-btn--xs p-btn--ghost",
    onClick: onClose,
    "aria-label": "Close"
  }, /*#__PURE__*/React.createElement("i", {
    className: "pi pi-close"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "d-stepper"
  }, /*#__PURE__*/React.createElement("span", {
    className: 'd-stepper__node ' + (step >= 1 ? 'is-on' : '')
  }, "1", /*#__PURE__*/React.createElement("i", {
    className: "pi pi-checkmark"
  })), /*#__PURE__*/React.createElement("span", {
    className: "d-stepper__line"
  }), /*#__PURE__*/React.createElement("span", {
    className: 'd-stepper__node ' + (step >= 2 ? 'is-on' : '')
  }, "2", /*#__PURE__*/React.createElement("i", {
    className: "pi pi-checkmark"
  })), /*#__PURE__*/React.createElement("span", {
    className: "d-stepper__line"
  }), /*#__PURE__*/React.createElement("span", {
    className: 'd-stepper__node ' + (step >= 3 ? 'is-on' : '')
  }, "3", /*#__PURE__*/React.createElement("i", {
    className: "pi pi-checkmark"
  }))), step === 1 && /*#__PURE__*/React.createElement("div", {
    className: "d-modal__body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "d-doc-preview"
  }, /*#__PURE__*/React.createElement("div", {
    className: "d-doc-preview__page"
  }, /*#__PURE__*/React.createElement("div", {
    className: "d-doc-preview__title"
  }, "NON-DISCLOSURE AGREEMENT"), /*#__PURE__*/React.createElement("div", {
    className: "d-doc-preview__pp"
  }, "This Agreement is entered into on 24 May 2026 between Atlas Corp (\"Disclosing Party\") and the undersigned Recipient."), /*#__PURE__*/React.createElement("div", {
    className: "d-doc-preview__pp",
    style: {
      opacity: .65
    }
  }, "1. Confidential Information shall mean any non-public information including business plans, financial data, customer lists\u2026"), /*#__PURE__*/React.createElement("div", {
    className: "d-doc-preview__pp",
    style: {
      opacity: .45
    }
  }, "2. Recipient agrees to hold all Confidential Information in strict confidence for a period of three (3) years\u2026"), /*#__PURE__*/React.createElement("div", {
    className: "d-doc-preview__sigblock"
  }, /*#__PURE__*/React.createElement("div", {
    className: "d-doc-preview__sig"
  }, /*#__PURE__*/React.createElement("span", null, "Signed,"), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/img-signature.png",
    alt: "signature"
  }), /*#__PURE__*/React.createElement("strong", null, "Rafi Ananda"), /*#__PURE__*/React.createElement("em", null, "rafi@privy.id \xB7 24 May 2026, 14:32 WIB")), /*#__PURE__*/React.createElement("div", {
    className: "d-doc-preview__sig is-empty"
  }, /*#__PURE__*/React.createElement("span", null, "Awaiting signature"), /*#__PURE__*/React.createElement("div", {
    className: "d-doc-preview__sig-empty"
  }, "Your signature here"), /*#__PURE__*/React.createElement("strong", null, "Joko Kurniawan"), /*#__PURE__*/React.createElement("em", null, "joko@atlas.id")))), /*#__PURE__*/React.createElement("aside", {
    className: "d-doc-preview__side"
  }, /*#__PURE__*/React.createElement("h4", null, "Document details"), /*#__PURE__*/React.createElement("dl", null, /*#__PURE__*/React.createElement("dt", null, "Document ID"), /*#__PURE__*/React.createElement("dd", {
    className: "ds-mono"
  }, "DOC-9F32-A41C"), /*#__PURE__*/React.createElement("dt", null, "Parties"), /*#__PURE__*/React.createElement("dd", null, "2 signers"), /*#__PURE__*/React.createElement("dt", null, "Expires"), /*#__PURE__*/React.createElement("dd", null, "30 May 2026"), /*#__PURE__*/React.createElement("dt", null, "e-Meterai"), /*#__PURE__*/React.createElement("dd", null, "1 stamp will be used")), /*#__PURE__*/React.createElement("hr", {
    className: "p-divider"
  }), /*#__PURE__*/React.createElement("p", {
    className: "d-disclaimer"
  }, "By signing, you confirm this document is accurate and consent to electronic signing under UU ITE No. 11/2008."))), /*#__PURE__*/React.createElement("footer", {
    className: "d-modal__foot"
  }, /*#__PURE__*/React.createElement("button", {
    className: "p-btn p-btn--md p-btn--ghost",
    onClick: onClose
  }, "Cancel"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("button", {
    className: "p-btn p-btn--md p-btn--outline p-btn--secondary"
  }, /*#__PURE__*/React.createElement("i", {
    className: "pi pi-download"
  }), " Download"), /*#__PURE__*/React.createElement("button", {
    className: "p-btn p-btn--md p-btn--primary",
    onClick: () => setStep(2)
  }, /*#__PURE__*/React.createElement("i", {
    className: "pi pi-signature"
  }), " Sign with OTP"))), step === 2 && /*#__PURE__*/React.createElement("div", {
    className: "d-modal__body d-modal__body--center"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/illustrations/biometric.svg",
    alt: "",
    style: {
      width: 96,
      height: 96
    }
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      marginTop: 16
    }
  }, "Enter the 6-digit code"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--fg-subtle)',
      fontSize: 14,
      marginTop: 6
    }
  }, "We sent a code to ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--fg-default)'
    }
  }, "\u2022\u2022\u2022\u2022 4421"), ". It expires in 4:58."), /*#__PURE__*/React.createElement("div", {
    className: "d-otp"
  }, otp.map((v, i) => /*#__PURE__*/React.createElement("input", {
    key: i,
    className: "d-otp__cell",
    inputMode: "numeric",
    maxLength: "1",
    value: v,
    onChange: e => setDigit(i, e.target.value)
  }))), /*#__PURE__*/React.createElement("div", {
    className: "d-modal__center-actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "p-btn p-btn--link"
  }, "Resend code"), /*#__PURE__*/React.createElement("button", {
    className: "p-btn p-btn--md p-btn--primary",
    onClick: () => setStep(3)
  }, "Confirm signature"))), step === 3 && /*#__PURE__*/React.createElement("div", {
    className: "d-modal__body d-modal__body--center"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/illustrations/checkmark-document.svg",
    alt: "",
    style: {
      width: 108,
      height: 108
    }
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      marginTop: 16
    }
  }, "Document signed"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--fg-subtle)',
      fontSize: 14,
      marginTop: 6
    }
  }, "A signed copy will land in your inbox once the remaining signer completes."), /*#__PURE__*/React.createElement("div", {
    className: "d-modal__center-actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "p-btn p-btn--md p-btn--outline p-btn--secondary"
  }, /*#__PURE__*/React.createElement("i", {
    className: "pi pi-download"
  }), " Download copy"), /*#__PURE__*/React.createElement("button", {
    className: "p-btn p-btn--md p-btn--primary",
    onClick: onClose
  }, "Back to inbox")))));
}
window.SigningModal = SigningModal;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/SigningModal.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/components.jsx
try { (() => {
/* eslint-disable */
/* global React */
const {
  useState
} = React;

/* ─── Sidebar ─── */
function Sidebar({
  active,
  onNavigate
}) {
  const items = [{
    id: 'inbox',
    icon: 'pi-inbox',
    label: 'Inbox',
    count: 12
  }, {
    id: 'documents',
    icon: 'pi-document-signed',
    label: 'Documents'
  }, {
    id: 'templates',
    icon: 'pi-document-template',
    label: 'Templates'
  }, {
    id: 'contacts',
    icon: 'pi-group-contact',
    label: 'Contacts'
  }, {
    id: 'audit',
    icon: 'pi-document-history',
    label: 'Audit trail'
  }];
  const settings = [{
    id: 'settings',
    icon: 'pi-settings',
    label: 'Settings'
  }, {
    id: 'help',
    icon: 'pi-question-circle',
    label: 'Help center'
  }];
  return /*#__PURE__*/React.createElement("aside", {
    className: "d-sidebar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "d-sidebar__brand"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/icon-privy.svg",
    alt: "Privy"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "d-sidebar__brand-name"
  }, "Privy"), /*#__PURE__*/React.createElement("div", {
    className: "d-sidebar__brand-org"
  }, "Atlas Corp \xB7 Enterprise"))), /*#__PURE__*/React.createElement("nav", {
    className: "d-sidebar__nav"
  }, items.map(it => /*#__PURE__*/React.createElement("button", {
    key: it.id,
    className: 'd-sidebar__item ' + (active === it.id ? 'is-active' : ''),
    onClick: () => onNavigate && onNavigate(it.id)
  }, /*#__PURE__*/React.createElement("i", {
    className: 'pi ' + (active === it.id ? it.icon + '-solid' : it.icon)
  }), /*#__PURE__*/React.createElement("span", null, it.label), it.count != null && /*#__PURE__*/React.createElement("span", {
    className: "d-sidebar__count"
  }, it.count)))), /*#__PURE__*/React.createElement("div", {
    className: "d-sidebar__divider"
  }), /*#__PURE__*/React.createElement("nav", {
    className: "d-sidebar__nav"
  }, settings.map(it => /*#__PURE__*/React.createElement("button", {
    key: it.id,
    className: "d-sidebar__item"
  }, /*#__PURE__*/React.createElement("i", {
    className: 'pi ' + it.icon
  }), /*#__PURE__*/React.createElement("span", null, it.label)))), /*#__PURE__*/React.createElement("div", {
    className: "d-sidebar__balance"
  }, /*#__PURE__*/React.createElement("div", {
    className: "d-sidebar__balance-row"
  }, /*#__PURE__*/React.createElement("i", {
    className: "pi pi-e-meterai"
  }), /*#__PURE__*/React.createElement("span", null, "e-Meterai stock")), /*#__PURE__*/React.createElement("div", {
    className: "d-sidebar__balance-row"
  }, /*#__PURE__*/React.createElement("strong", null, "248"), /*#__PURE__*/React.createElement("a", {
    className: "ds-link",
    href: "#"
  }, "Top up"))));
}

/* ─── Topbar ─── */
function Topbar({
  onCompose
}) {
  return /*#__PURE__*/React.createElement("header", {
    className: "d-topbar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "d-topbar__search"
  }, /*#__PURE__*/React.createElement("i", {
    className: "pi pi-search"
  }), /*#__PURE__*/React.createElement("input", {
    placeholder: "Search by document name, signer, or doc ID"
  }), /*#__PURE__*/React.createElement("kbd", null, "\u2318K")), /*#__PURE__*/React.createElement("div", {
    className: "d-topbar__actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "p-btn p-btn--sm p-btn--ghost",
    "aria-label": "Notifications"
  }, /*#__PURE__*/React.createElement("i", {
    className: "pi pi-notification"
  }), /*#__PURE__*/React.createElement("span", {
    className: "d-topbar__dot"
  })), /*#__PURE__*/React.createElement("button", {
    className: "p-btn p-btn--md p-btn--primary",
    onClick: onCompose
  }, /*#__PURE__*/React.createElement("i", {
    className: "pi pi-add-document"
  }), "New document"), /*#__PURE__*/React.createElement("div", {
    className: "d-topbar__user"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-avatar p-avatar--sm p-avatar--seed-1"
  }, "RA"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "d-topbar__user-name"
  }, "Rafi Ananda"), /*#__PURE__*/React.createElement("div", {
    className: "d-topbar__user-role"
  }, "Admin")), /*#__PURE__*/React.createElement("i", {
    className: "pi pi-chevron-down",
    style: {
      fontSize: 12,
      color: 'var(--fg-subtle)'
    }
  }))));
}

/* ─── Stats row ─── */
function StatRow() {
  const stats = [{
    label: 'Awaiting your signature',
    val: '7',
    delta: '+2 today',
    tone: 'warning',
    ico: 'pi-need-action-solid'
  }, {
    label: 'In progress',
    val: '34',
    delta: '12 due this week',
    tone: 'info',
    ico: 'pi-time-solid'
  }, {
    label: 'Signed this month',
    val: '128',
    delta: '+12% vs. May',
    tone: 'success',
    ico: 'pi-document-signed-solid'
  }, {
    label: 'e-Meterai stock',
    val: '248',
    delta: 'Auto-refill on',
    tone: 'default',
    ico: 'pi-e-meterai-solid'
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "d-stats"
  }, stats.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "d-stat"
  }, /*#__PURE__*/React.createElement("div", {
    className: 'd-stat__ico d-stat__ico--' + s.tone
  }, /*#__PURE__*/React.createElement("i", {
    className: 'pi ' + s.ico
  })), /*#__PURE__*/React.createElement("div", {
    className: "d-stat__body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "d-stat__label"
  }, s.label), /*#__PURE__*/React.createElement("div", {
    className: "d-stat__val"
  }, s.val), /*#__PURE__*/React.createElement("div", {
    className: 'd-stat__delta d-stat__delta--' + s.tone
  }, s.delta)))));
}

/* ─── Document table ─── */
function DocumentTable({
  rows,
  onOpen
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "d-tablecard"
  }, /*#__PURE__*/React.createElement("div", {
    className: "d-tablecard__head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "d-tablecard__title"
  }, "Inbox"), /*#__PURE__*/React.createElement("p", {
    className: "d-tablecard__sub"
  }, "Documents waiting on you or your team")), /*#__PURE__*/React.createElement("div", {
    className: "d-tablecard__head-actions"
  }, /*#__PURE__*/React.createElement("div", {
    className: "d-filterbar"
  }, /*#__PURE__*/React.createElement("button", {
    className: "d-chip is-active"
  }, "All"), /*#__PURE__*/React.createElement("button", {
    className: "d-chip"
  }, "Awaiting me ", /*#__PURE__*/React.createElement("span", null, "7")), /*#__PURE__*/React.createElement("button", {
    className: "d-chip"
  }, "In progress ", /*#__PURE__*/React.createElement("span", null, "34")), /*#__PURE__*/React.createElement("button", {
    className: "d-chip"
  }, "Completed"), /*#__PURE__*/React.createElement("button", {
    className: "d-chip"
  }, "Drafts")), /*#__PURE__*/React.createElement("button", {
    className: "p-btn p-btn--sm p-btn--outline p-btn--secondary"
  }, /*#__PURE__*/React.createElement("i", {
    className: "pi pi-adjust"
  }), " Filters"))), /*#__PURE__*/React.createElement("table", {
    className: "p-table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: {
      width: 36
    }
  }, /*#__PURE__*/React.createElement("label", {
    className: "p-check"
  }, /*#__PURE__*/React.createElement("span", {
    className: "box"
  }))), /*#__PURE__*/React.createElement("th", null, "Document"), /*#__PURE__*/React.createElement("th", null, "Signers"), /*#__PURE__*/React.createElement("th", null, "Status"), /*#__PURE__*/React.createElement("th", null, "Owner"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: 'right'
    }
  }, "Updated"), /*#__PURE__*/React.createElement("th", null))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, i) => /*#__PURE__*/React.createElement("tr", {
    key: i,
    onClick: () => onOpen && onOpen(r),
    style: {
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("td", {
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("label", {
    className: "p-check"
  }, /*#__PURE__*/React.createElement("span", {
    className: "box"
  }))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
    className: "d-doc"
  }, /*#__PURE__*/React.createElement("div", {
    className: "d-doc__ico"
  }, /*#__PURE__*/React.createElement("i", {
    className: 'pi ' + r.icon
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "d-doc__name"
  }, r.name), /*#__PURE__*/React.createElement("div", {
    className: "d-doc__meta"
  }, "ID \xB7 ", r.id, " \xB7 ", r.size)))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
    className: "d-signers"
  }, /*#__PURE__*/React.createElement("div", {
    className: "d-signers__pile"
  }, r.signers.slice(0, 3).map((s, si) => /*#__PURE__*/React.createElement("div", {
    key: si,
    className: 'p-avatar p-avatar--xs p-avatar--seed-' + (si % 6 + 1)
  }, s)), r.signers.length > 3 && /*#__PURE__*/React.createElement("div", {
    className: "p-avatar p-avatar--xs",
    style: {
      background: 'var(--gray-10)',
      color: 'var(--fg-default)'
    }
  }, "+", r.signers.length - 3)), /*#__PURE__*/React.createElement("span", {
    className: "d-signers__count"
  }, r.signedCount, " of ", r.signers.length))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
    className: 'p-tag p-tag--' + r.statusTone
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), r.statusLabel)), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13
    }
  }, r.owner)), /*#__PURE__*/React.createElement("td", {
    style: {
      textAlign: 'right',
      color: 'var(--fg-subtle)',
      fontSize: 12
    }
  }, r.updated), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("button", {
    className: "p-btn p-btn--xs p-btn--ghost",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("i", {
    className: "pi pi-menu-horizontal"
  }))))))), /*#__PURE__*/React.createElement("div", {
    className: "d-tablecard__foot"
  }, /*#__PURE__*/React.createElement("span", null, "Showing 8 of 246"), /*#__PURE__*/React.createElement("div", {
    className: "d-pager"
  }, /*#__PURE__*/React.createElement("button", {
    className: "p-btn p-btn--xs p-btn--ghost"
  }, /*#__PURE__*/React.createElement("i", {
    className: "pi pi-chevron-left"
  })), /*#__PURE__*/React.createElement("button", {
    className: "p-btn p-btn--xs p-btn--primary p-btn--pill",
    style: {
      minWidth: 28,
      padding: '4px 8px'
    }
  }, "1"), /*#__PURE__*/React.createElement("button", {
    className: "p-btn p-btn--xs p-btn--ghost",
    style: {
      minWidth: 28,
      padding: '4px 8px'
    }
  }, "2"), /*#__PURE__*/React.createElement("button", {
    className: "p-btn p-btn--xs p-btn--ghost",
    style: {
      minWidth: 28,
      padding: '4px 8px'
    }
  }, "3"), /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '0 4px',
      color: 'var(--fg-subtlest)'
    }
  }, "\u2026"), /*#__PURE__*/React.createElement("button", {
    className: "p-btn p-btn--xs p-btn--ghost",
    style: {
      minWidth: 28,
      padding: '4px 8px'
    }
  }, "31"), /*#__PURE__*/React.createElement("button", {
    className: "p-btn p-btn--xs p-btn--ghost"
  }, /*#__PURE__*/React.createElement("i", {
    className: "pi pi-chevron-right"
  })))));
}

/* ─── Right rail: progress + activity ─── */
function RightRail() {
  const activity = [{
    who: 'Joko Kurniawan',
    what: 'signed',
    doc: 'NDA — Atlas Corp',
    when: '2m ago',
    tone: 'success'
  }, {
    who: 'Siti Nurhaliza',
    what: 'opened',
    doc: 'Service Agreement',
    when: '14m ago',
    tone: 'info'
  }, {
    who: 'You',
    what: 'sent',
    doc: 'Vendor MoU — Q3',
    when: '1h ago',
    tone: 'default'
  }, {
    who: 'Bayu Pratama',
    what: 'declined',
    doc: 'Office lease addendum',
    when: '3h ago',
    tone: 'danger'
  }];
  return /*#__PURE__*/React.createElement("aside", {
    className: "d-rail"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-card p-card--shadow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "d-rail__head"
  }, /*#__PURE__*/React.createElement("h4", null, "Q3 signing target"), /*#__PURE__*/React.createElement("span", {
    className: "p-tag p-tag--info"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), "On track")), /*#__PURE__*/React.createElement("div", {
    className: "d-rail__big"
  }, "128 ", /*#__PURE__*/React.createElement("span", null, "of 200")), /*#__PURE__*/React.createElement("div", {
    className: "d-progress"
  }, /*#__PURE__*/React.createElement("div", {
    className: "d-progress__bar",
    style: {
      width: '64%'
    }
  })), /*#__PURE__*/React.createElement("p", {
    className: "d-rail__sub"
  }, "64% complete \xB7 28 days remaining")), /*#__PURE__*/React.createElement("div", {
    className: "p-card",
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "d-rail__head"
  }, /*#__PURE__*/React.createElement("h4", null, "Recent activity"), /*#__PURE__*/React.createElement("a", {
    className: "ds-link",
    href: "#"
  }, "View all")), /*#__PURE__*/React.createElement("ul", {
    className: "d-activity"
  }, activity.map((a, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: 'd-activity__dot d-activity__dot--' + a.tone
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "d-activity__line"
  }, /*#__PURE__*/React.createElement("strong", null, a.who), " ", a.what, " ", /*#__PURE__*/React.createElement("strong", null, a.doc)), /*#__PURE__*/React.createElement("div", {
    className: "d-activity__when"
  }, a.when)))))));
}
window.Sidebar = Sidebar;
window.Topbar = Topbar;
window.StatRow = StatRow;
window.DocumentTable = DocumentTable;
window.RightRail = RightRail;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/components.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/components.jsx
try { (() => {
/* eslint-disable */
/* global React */

function NavBar() {
  return /*#__PURE__*/React.createElement("header", {
    className: "w-nav"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-nav__inner"
  }, /*#__PURE__*/React.createElement("a", {
    className: "w-nav__brand",
    href: "#"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-privy.svg",
    alt: "Privy"
  })), /*#__PURE__*/React.createElement("nav", {
    className: "w-nav__links"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Products ", /*#__PURE__*/React.createElement("i", {
    className: "pi pi-chevron-down"
  })), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Solutions ", /*#__PURE__*/React.createElement("i", {
    className: "pi pi-chevron-down"
  })), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Pricing"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Developers"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Resources")), /*#__PURE__*/React.createElement("div", {
    className: "w-nav__cta"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "w-nav__login"
  }, "Sign in"), /*#__PURE__*/React.createElement("button", {
    className: "p-btn p-btn--sm p-btn--primary p-btn--pill"
  }, "Get started"))));
}
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    className: "w-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-hero__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-hero__copy"
  }, /*#__PURE__*/React.createElement("span", {
    className: "p-tag p-tag--info",
    style: {
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), "New \xB7 Privy Pass for HR teams"), /*#__PURE__*/React.createElement("h1", null, "The trusted digital\xA0signature for\xA0Indonesia."), /*#__PURE__*/React.createElement("p", null, "Send, sign, and verify documents in minutes \u2014 backed by certified identity, e-Meterai stamping, and an audit trail every court accepts. Used by 18M+ Indonesians and 7,000 enterprises."), /*#__PURE__*/React.createElement("div", {
    className: "w-hero__actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "p-btn p-btn--lg p-btn--primary p-btn--pill"
  }, "Start signing free"), /*#__PURE__*/React.createElement("button", {
    className: "p-btn p-btn--lg p-btn--ghost"
  }, /*#__PURE__*/React.createElement("i", {
    className: "pi pi-play-solid"
  }), " Watch demo \xB7 90 sec")), /*#__PURE__*/React.createElement("div", {
    className: "w-hero__trust"
  }, /*#__PURE__*/React.createElement("span", null, "Trusted by"), /*#__PURE__*/React.createElement("div", {
    className: "w-hero__logos"
  }, /*#__PURE__*/React.createElement("strong", null, "BCA"), /*#__PURE__*/React.createElement("strong", null, "Mandiri"), /*#__PURE__*/React.createElement("strong", null, "Telkomsel"), /*#__PURE__*/React.createElement("strong", null, "Tokopedia"), /*#__PURE__*/React.createElement("strong", null, "BPJS")))), /*#__PURE__*/React.createElement("div", {
    className: "w-hero__art"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-hero__device"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-hero__device-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot",
    style: {
      background: '#FF5F57'
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "dot",
    style: {
      background: '#FFBD2E'
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "dot",
    style: {
      background: '#28C840'
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "w-hero__device-url"
  }, "privy.id/sign/DOC-9F32-A41C")), /*#__PURE__*/React.createElement("div", {
    className: "w-hero__device-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-hero__doc"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ds-overline"
  }, "Awaiting your signature"), /*#__PURE__*/React.createElement("h4", null, "NDA \u2014 Atlas Corp"), /*#__PURE__*/React.createElement("div", {
    className: "w-hero__doc-meta"
  }, /*#__PURE__*/React.createElement("i", {
    className: "pi pi-pdf"
  }), " 248 KB \xB7 4 pages", /*#__PURE__*/React.createElement("span", {
    className: "p-tag p-tag--warning"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), "1 of 3 signed")), /*#__PURE__*/React.createElement("div", {
    className: "w-hero__sigblock"
  }, /*#__PURE__*/React.createElement("span", null, "Sign here"), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/img-signature.png",
    alt: "signature preview"
  })), /*#__PURE__*/React.createElement("button", {
    className: "p-btn p-btn--md p-btn--primary",
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "pi pi-signature"
  }), " Sign with OTP")), /*#__PURE__*/React.createElement("div", {
    className: "w-hero__toast"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-hero__toast-ico"
  }, /*#__PURE__*/React.createElement("i", {
    className: "pi pi-checkmark-circle-solid"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "Joko signed your document"), /*#__PURE__*/React.createElement("em", null, "just now \xB7 view audit trail"))))))));
}
function Features() {
  const items = [{
    illo: 'checkmark-document',
    title: 'Legally-binding signatures',
    body: 'PSrE-certified under UU ITE No. 11/2008. Every signature carries identity, timestamp, and a tamper-evident hash.'
  }, {
    illo: 'id-card',
    title: 'KTP & face verification',
    body: 'OCR your KTP and match it to a live selfie. Onboard customers in seconds — not days.'
  }, {
    illo: 'document-template',
    title: 'Templates & bulk send',
    body: 'Save recurring contracts as templates. Send to one signer or 10,000 — invoices, NDAs, offer letters.'
  }, {
    illo: 'biometric',
    title: 'Biometric signing',
    body: 'Step up to FaceID, fingerprint, or e-KYC for high-value documents. Tiered authentication per workflow.'
  }, {
    illo: 'document-processing',
    title: 'e-Meterai stamping',
    body: 'Affix official Rp 10.000 e-Meterai stamps inline with signing — fully compliant, no separate workflow.'
  }, {
    illo: 'group',
    title: 'Audit-ready trails',
    body: 'Every action — open, view, decline, sign — is logged with IP, device, and time. Export any time as PDF.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "w-features"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-section-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ds-overline"
  }, "Why Privy"), /*#__PURE__*/React.createElement("h2", null, "Everything you need to sign documents that hold up\xA0in\xA0court.")), /*#__PURE__*/React.createElement("div", {
    className: "w-features__grid"
  }, items.map((it, i) => /*#__PURE__*/React.createElement("article", {
    className: "w-feature",
    key: i
  }, /*#__PURE__*/React.createElement("img", {
    src: '../../assets/illustrations/' + it.illo + '.svg',
    alt: ""
  }), /*#__PURE__*/React.createElement("h4", null, it.title), /*#__PURE__*/React.createElement("p", null, it.body), /*#__PURE__*/React.createElement("a", {
    className: "w-feature__more",
    href: "#"
  }, "Learn more \u2192")))));
}
function HowItWorks() {
  const steps = [{
    n: '01',
    title: 'Upload your document',
    body: 'PDF, DOCX, or use a saved template. Drag-drop signature fields where you need them.'
  }, {
    n: '02',
    title: 'Invite signers',
    body: 'Send by email, WhatsApp, or share a link. We collect each signer\u2019s identity.'
  }, {
    n: '03',
    title: 'Sign and stamp',
    body: 'Signers verify with OTP, biometric, or e-KYC. e-Meterai applied inline.'
  }, {
    n: '04',
    title: 'Done — and provable',
    body: 'A signed PDF lands in everyone\u2019s inbox. The audit trail is one click away.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "w-how"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-section-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ds-overline"
  }, "How it works"), /*#__PURE__*/React.createElement("h2", null, "Four steps. One signed contract.")), /*#__PURE__*/React.createElement("ol", {
    className: "w-how__steps"
  }, steps.map((s, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-how__n"
  }, s.n), /*#__PURE__*/React.createElement("h4", null, s.title), /*#__PURE__*/React.createElement("p", null, s.body)))));
}
function Pricing() {
  const plans = [{
    name: 'Starter',
    price: 'Free',
    sub: 'For freelancers and small teams getting started.',
    features: ['5 documents per month', 'Email signing', 'Audit trail (90 days)', 'Single user'],
    cta: 'Start free',
    style: 'plain'
  }, {
    name: 'Pro',
    price: 'Rp 149.000',
    tag: 'Most popular',
    sub: 'For teams that send contracts every week.',
    features: ['Unlimited documents', 'OTP & biometric signing', '10 templates', 'Audit trail (forever)', 'Up to 25 users'],
    cta: 'Try Pro free for 14 days',
    style: 'feature'
  }, {
    name: 'Enterprise',
    price: 'Let\u2019s talk',
    sub: 'Custom workflows, SSO, and 24/7 support.',
    features: ['Everything in Pro', 'SSO + SCIM', 'API access', 'On-prem deployment available', 'Dedicated CSM'],
    cta: 'Contact sales',
    style: 'plain'
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "w-pricing"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-section-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ds-overline"
  }, "Pricing"), /*#__PURE__*/React.createElement("h2", null, "Plans for every team.")), /*#__PURE__*/React.createElement("div", {
    className: "w-pricing__grid"
  }, plans.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: 'w-plan w-plan--' + p.style
  }, p.tag && /*#__PURE__*/React.createElement("span", {
    className: "w-plan__tag"
  }, p.tag), /*#__PURE__*/React.createElement("h3", null, p.name), /*#__PURE__*/React.createElement("div", {
    className: "w-plan__price"
  }, /*#__PURE__*/React.createElement("span", {
    className: "big"
  }, p.price), p.price.startsWith('Rp') && /*#__PURE__*/React.createElement("span", {
    className: "per"
  }, "/ user / mo")), /*#__PURE__*/React.createElement("p", {
    className: "w-plan__sub"
  }, p.sub), /*#__PURE__*/React.createElement("ul", null, p.features.map((f, j) => /*#__PURE__*/React.createElement("li", {
    key: j
  }, /*#__PURE__*/React.createElement("i", {
    className: "pi pi-checkmark"
  }), f))), /*#__PURE__*/React.createElement("button", {
    className: 'p-btn p-btn--md ' + (p.style === 'feature' ? 'p-btn--primary' : 'p-btn--outline p-btn--secondary')
  }, p.cta)))));
}
function CTA() {
  return /*#__PURE__*/React.createElement("section", {
    className: "w-cta"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-cta__inner"
  }, /*#__PURE__*/React.createElement("h2", null, "Stop chasing signatures. Start closing deals."), /*#__PURE__*/React.createElement("p", null, "Set up takes 4 minutes. No credit card. Your first 5 documents are on us."), /*#__PURE__*/React.createElement("div", {
    className: "w-cta__actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "p-btn p-btn--lg p-btn--primary p-btn--pill"
  }, "Start signing free"), /*#__PURE__*/React.createElement("button", {
    className: "p-btn p-btn--lg p-btn--outline p-btn--secondary"
  }, "Book a demo"))));
}
function Footer() {
  const cols = [{
    h: 'Products',
    items: ['e-Signature', 'e-Meterai', 'Identity verification', 'API & integrations', 'Privy Pass']
  }, {
    h: 'Solutions',
    items: ['HR & onboarding', 'Sales contracts', 'Legal', 'Financial services', 'Healthcare']
  }, {
    h: 'Company',
    items: ['About', 'Careers', 'Press', 'Trust & security', 'Contact']
  }, {
    h: 'Resources',
    items: ['Help center', 'Developer docs', 'Status', 'Compliance', 'Privacy policy']
  }];
  return /*#__PURE__*/React.createElement("footer", {
    className: "w-foot"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-foot__inner"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-privy.svg",
    alt: "Privy",
    className: "w-foot__logo"
  }), /*#__PURE__*/React.createElement("p", {
    className: "w-foot__tag"
  }, "PT Privy Identitas Digital \xB7 Indonesia"), /*#__PURE__*/React.createElement("div", {
    className: "w-foot__certs"
  }, /*#__PURE__*/React.createElement("span", null, "Kominfo PSE"), /*#__PURE__*/React.createElement("span", null, "ISO 27001"), /*#__PURE__*/React.createElement("span", null, "SOC 2 Type II"))), cols.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement("h5", null, c.h), /*#__PURE__*/React.createElement("ul", null, c.items.map((it, j) => /*#__PURE__*/React.createElement("li", {
    key: j
  }, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, it))))))), /*#__PURE__*/React.createElement("div", {
    className: "w-foot__bottom"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 PT Privy Identitas Digital. All rights reserved."), /*#__PURE__*/React.createElement("div", {
    className: "w-foot__social"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, /*#__PURE__*/React.createElement("i", {
    className: "pi pi-linkedin"
  })), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, /*#__PURE__*/React.createElement("i", {
    className: "pi pi-twitter"
  })), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, /*#__PURE__*/React.createElement("i", {
    className: "pi pi-instagram"
  })), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, /*#__PURE__*/React.createElement("i", {
    className: "pi pi-github"
  })))));
}
window.NavBar = NavBar;
window.Hero = Hero;
window.Features = Features;
window.HowItWorks = HowItWorks;
window.Pricing = Pricing;
window.CTA = CTA;
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/components.jsx", error: String((e && e.message) || e) }); }

})();
