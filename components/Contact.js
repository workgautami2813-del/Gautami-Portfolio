"use client";

import { useRef, useState } from "react";
import { profile } from "../data/content";

export default function Contact() {
  const [toast, setToast] = useState("");
  const emailRef = useRef(null);
  const timer = useRef(null);

  function show(message) {
    setToast(message);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setToast(""), 2000);
  }

  function selectEmail() {
    const range = document.createRange();
    range.selectNodeContents(emailRef.current);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    show("Email selected. Press Ctrl+C or Cmd+C to copy");
  }

  function copyEmail() {
    try {
      navigator.clipboard.writeText(profile.email).then(() => show("Email copied"), selectEmail);
    } catch {
      selectEmail();
    }
  }

  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <h2 id="contact-title">Building something complex? Let&apos;s make it feel simple.</h2>
      <p>I&apos;m open to Senior Product Designer roles, remote, hybrid or on-site. The quickest way to reach me is email.</p>
      <div className="mail">
        <code ref={emailRef}>{profile.email}</code>
        <button className="btn" type="button" onClick={copyEmail}>Copy email</button>
        <a className="btn ghost" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
        <a className="btn ghost" href={profile.moreWork} target="_blank" rel="noopener noreferrer">More work ↗</a>
      </div>
      {toast && <div className="toast" role="status">{toast}</div>}
    </section>
  );
}
