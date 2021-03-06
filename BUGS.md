* Test env
  * OS X 10.10.1 Yosemite
  * Chrome: Version 39.0.2171.95 (64-bit)
  * Safari: Version 8.0.2 (10600.2.5)
  * Scanner/Printer
    * HP Photosmart C4780
    * Scanned @ 1200dpi
    * Chrome print settings
      * Layout: Portrait
      * Paper size: US Letter
      * Margins: None
      * Background graphics: Checked
* `pngcrush -rem iTXt input.png cleaned_output.png`
* Chrome: https://bugs.chromium.org/p/chromium/issues/list?q=component%3AInternals%3EPrinting
  * https://code.google.com/p/chromium/issues/detail?id=127651 (Element with box-shadow prints as a completely black box)
  * https://code.google.com/p/chromium/issues/detail?id=139706 (Print dialog box should be modal)
  * https://code.google.com/p/chromium/issues/detail?id=139825 (Printing fails if `<html>` has height of 0) [Restricted]
  * https://code.google.com/p/chromium/issues/detail?id=174583 (`box-shadow` prints as solid black instead of gradient)
  * https://code.google.com/p/chromium/issues/detail?id=307611 (Multiple `dir` HTML attributes in document causes incorrect sizing when printing) [Restricted]
  * https://bugs.chromium.org/p/chromium/issues/detail?id=508018 (Media queries do not work if the printed document is in an `<iframe>`)
* Safari: https://bugs.webkit.org/buglist.cgi?query_format=advanced&bug_status=UNCONFIRMED&bug_status=NEW&bug_status=ASSIGNED&bug_status=REOPENED&component=Printing&product=WebKit
  * https://bugs.webkit.org/show_bug.cgi?id=17205 (`<thead>` should be repeated on each printed page)
  * https://bugs.webkit.org/show_bug.cgi?id=19942 (CSS gradients are not printed properly)
  * https://bugs.webkit.org/show_bug.cgi?id=88365 (Printing fails if `<html>` has height of 0)
  * https://bugs.webkit.org/show_bug.cgi?id=126591 (`vw` unit uses width of monitor window instead of width of paper when printing)
  * https://bugs.webkit.org/show_bug.cgi?id=138192 (Fixed-width container makes fonts smaller when printing)
* Mozilla: https://bugzilla.mozilla.org/buglist.cgi?component=Printing%3A%20Output&product=Core&bug_status=__open__
  * Too numerous to survey. Haven't encountered anything personally though.
