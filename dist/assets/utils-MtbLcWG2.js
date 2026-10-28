(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const xe=`---
name: Lê Thị Cẩm Ly
email: camly.le@student.edu.vn
avatar: avatars/le-cam-li.png
hobbies:
  - Xem phim tài liệu
  - Học tiếng Nhật
---

## Giới thiệu

Mình là **Cẩm Ly**, thành viên "gánh deadline" của nhóm. Trang này bạn đang xem chính là bài tập do mình tổng hợp nội dung từ cả nhóm.

Trang cá nhân của mình cố tình ít thông tin để thử nghiệm: những trường không khai báo trong front-matter (lớp, MSSV, mạng xã hội...) sẽ không được render ra trang — và đúng là không có gì bị lỗi cả.

## Công việc trong nhóm

- Viết và biên tập nội dung markdown cho các bài tập
- Kiểm tra chính tả, link và hình ảnh trước khi nộp
- Ghi chép biên bản họp nhóm mỗi tuần

> Yêu thích nhất: khi cả bài tập nộp xong sớm một ngày so với deadline.
`,we=`---
name: Nguyễn Minh Anh
class: 21IT2
mssv: 21105123
email: minhanh211@gmail.com
facebook: https://facebook.com/minhanh.211
github: https://github.com/minhanh211
avatar: avatars/nguyen-minh-anh.png
quote: Giữ mọi thứ đơn giản, nhưng không đơn giản hoá quá mức.
hobbies:
  - Chụp ảnh
  - Đọc sách
  - Vẽ UI trên Figma
---

## Giới thiệu

Mình là **Minh Anh**, người phụ trách phần giao diện của nhóm. Mình thích những trang web sáng sủa, đọc dễ và không có thứ thừa nào trên màn hình. Ngoài giờ học, bạn thường bắt được mình đang chỉnh lại khoảng cách giữa các phần tử chỉ vì thấy nó "hơi lệch".

Trong học phần này, mình nhận phần dựng layout, làm trang thành viên và review UI cho bài của cả nhóm trước khi nộp.

## Vai trò trong nhóm

- Thiết kế UI/UX trên Figma
- Dựng front-end cho các trang thành viên
- Chốt màu và font chung của nhóm

## Mục tiêu học phần

1. Code HTML/CSS sạch, không phụ thuộc framework
2. Thuộc lòng hết các thuộc tính của Flexbox
3. Hoàn thành học phần với điểm A trở lên

> Mẹo nhỏ: trước khi nộp bài, hãy mở trang bằng trình duyệt ẩn danh để xem trạng thái "lần đầu ghé thăm" của người khác nhé.
`,ye=`---
name: Trần Quốc Bảo
class: 21IT2
mssv: 21105207
email: bqbao.dev@gmail.com
github: https://github.com/quocbao2107
avatar: avatars/tran-quoc-bao.png
hobbies: [Cà phê, Bóng đá, Gaming]
---

## Giới thiệu

Mình là **Quốc Bảo**, "back-end" của nhóm. Mình thích những thứ chạy được hơn là những thứ nhìn đẹp, nên đừng hỏi mình vì sao giao diện do nhóm làm luôn tối giản.

Mình chịu trách nhiệm cấu trúc dữ liệu markdown, viết tool build bằng Vite và deploy trang lên GitHub Pages.

## Vai trò trong nhóm

- Thiết kế cấu trúc front-matter cho file markdown
- Cấu hình Vite và deploy
- Xử lý bug mà Minh Anh "thổi hồn" xong không chạy

## Sở thích cá nhân

- Sáng thứ bảy đá bóng với lớp
- Ngủ trưa 20 phút trước khi code buổi tối
- Sưu tầm bàn phím cơ (hiện có 2 cái)
`,ve=`---
title: Bài 1 — Giới thiệu bản thân bằng HTML
date: 20/09/2026
status: Đã hoàn thành
desc: Tạo trang profile cá nhân bằng HTML thuần và đưa lên GitHub Pages.
---

## Mục tiêu

- Làm quen với cấu trúc một trang HTML hoàn chỉnh
- Dùng đúng các thẻ tiêu đề, danh sách, bảng và liên kết theo ngữ nghĩa
- Đưa trang lên GitHub Pages để cả nhóm cùng review chéo

## Nội dung thực hiện

Mỗi thành viên tạo một trang \`index.html\` giới thiệu bản thân, gồm phần tiêu đề, ảnh đại diện, bảng thông tin liên hệ và một đoạn mô tả ngắn. Trang phải vượt qua kiểm tra của [W3C Validator](https://validator.w3.org/) không có lỗi nào.

\`\`\`html
<!doctype html>
<html lang="vi">
  <head>
    <meta charset="UTF-8" />
    <title>Giới thiệu bản thân</title>
  </head>
  <body>
    <h1>Nguyễn Minh Anh</h1>
    <p>Sinh viên lớp 21IT2 — thích vẽ UI và chụp ảnh.</p>
    <a href="mailto:minhanh211@gmail.com">Liên hệ</a>
  </body>
</html>
\`\`\`

## Kết quả review chéo trong nhóm

| Thành viên | Điểm | Nhận xét |
| ---------- | :--: | -------- |
| Nguyễn Minh Anh | 10 | Bố cục rõ ràng, thẻ dùng đúng ngữ nghĩa |
| Trần Quốc Bảo | 9.5 | Quên thẻ \`alt\` cho ảnh đại diện |
| Lê Thị Cẩm Ly | 9.75 | Code sạch, validate W3C không lỗi |

> Điểm do cả nhóm tự review chéo trước khi nộp, không phải điểm chính thức của giảng viên.
`,Se=`---
title: Bài 2 — CSS và Flexbox
date: 28/10/2026
status: Đang thực hiện
desc: Dựng layout trang tin tức bằng Flexbox, viết style.css riêng, responsive 2 breakpoint.
---

## Yêu cầu

1. Dựng layout *header — sidebar — nội dung — footer* bằng Flexbox (không dùng float)
2. Responsive tối thiểu 2 breakpoint: 768px và 480px
3. Toàn bộ style phải nằm trong một file \`style.css\` riêng, không viết CSS inline

## Tiến độ của nhóm

- [x] Khung layout chung của trang
- [x] Header và menu điều hướng
- [x] Chia cột phần danh sách bài viết
- [ ] Responsive cho màn hình nhỏ
- [ ] Viết mô tả trong README

## Một đoạn CSS mẫu từ bài

Phần card bài viết dùng \`flex-wrap\` để tự xuống dòng khi hẹp màn hình:

\`\`\`css
.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.card {
  flex: 1 1 240px;
  border: 1px solid #e5e8ee;
  border-radius: 12px;
}
\`\`\`

## Ghi chú

Phần khó nhất là giữ khoảng cách đều giữa các card khi số card mỗi hàng khác nhau. Nhóm đã thử \`justify-content: space-between\` nhưng khi còn lẻ một card thì nó bị đẩy hẳn sang phải, cuối cùng chọn cách dùng \`gap\` như trong đoạn code trên.
`,Te=`---
title: Bài 3 — JavaScript với DOM
date: 08/11/2026
status: Chưa hoàn thành
desc: Làm form đăng ký học nhóm và kiểm tra dữ liệu bằng JavaScript thuần.
---

## Yêu cầu

- Form gồm các trường: họ tên, email, mật khẩu
- Kiểm tra dữ liệu hợp lệ **trước khi** submit, hiện thông báo lỗi ngay dưới từng ô nhập
- Không dùng thư viện ngoài, chỉ JavaScript thuần

## Kịch bản kiểm thử dự kiến

1. Nhập thiếu họ tên → báo lỗi "Vui lòng nhập họ tên"
2. Nhập email không có \`@\` → báo lỗi định dạng
3. Mật khẩu ngắn hơn 8 ký tự → báo lỗi độ dài
4. Nhập đúng hết → hiện thông báo đăng ký thành công

*Cả nhóm họp tối thứ năm để phân chia phần việc cho bài này.*
`;function G(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var S=G();function le(n){S=n}var _={exec:()=>null};function g(n,e=""){let t=typeof n=="string"?n:n.source;const r={replace:(i,s)=>{let l=typeof s=="string"?s:s.source;return l=l.replace(m.caret,"$1"),t=t.replace(i,l),r},getRegex:()=>new RegExp(t,e)};return r}var m={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:n=>new RegExp(`^( {0,3}${n})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}#`),htmlBeginRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}<(?:[a-z].*>|!--)`,"i")},$e=/^(?:[ \t]*(?:\n|$))+/,Re=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,_e=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,A=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Ae=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Z=/(?:[*+-]|\d{1,9}[.)])/,ae=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,oe=g(ae).replace(/bull/g,Z).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),ze=g(ae).replace(/bull/g,Z).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),H=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,Ce=/^[^\n]+/,j=/(?!\s*\])(?:\\.|[^\[\]\\])+/,Le=g(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",j).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Ie=g(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Z).getRegex(),B="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",F=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Pe=g("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",F).replace("tag",B).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),he=g(H).replace("hr",A).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",B).getRegex(),Be=g(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",he).getRegex(),Q={blockquote:Be,code:Re,def:Le,fences:_e,heading:Ae,hr:A,html:Pe,lheading:oe,list:Ie,newline:$e,paragraph:he,table:_,text:Ce},ee=g("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",A).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",B).getRegex(),qe={...Q,lheading:ze,table:ee,paragraph:g(H).replace("hr",A).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",ee).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",B).getRegex()},Me={...Q,html:g(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",F).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:_,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:g(H).replace("hr",A).replace("heading",` *#{1,6} *[^
]`).replace("lheading",oe).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Ee=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Ne=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,ce=/^( {2,}|\\)\n(?!\s*$)/,De=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,q=/[\p{P}\p{S}]/u,U=/[\s\p{P}\p{S}]/u,pe=/[^\s\p{P}\p{S}]/u,Oe=g(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,U).getRegex(),ue=/(?!~)[\p{P}\p{S}]/u,Ge=/(?!~)[\s\p{P}\p{S}]/u,Ze=/(?:[^\s\p{P}\p{S}]|~)/u,He=/\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g,ge=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,je=g(ge,"u").replace(/punct/g,q).getRegex(),Fe=g(ge,"u").replace(/punct/g,ue).getRegex(),fe="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",Qe=g(fe,"gu").replace(/notPunctSpace/g,pe).replace(/punctSpace/g,U).replace(/punct/g,q).getRegex(),Ue=g(fe,"gu").replace(/notPunctSpace/g,Ze).replace(/punctSpace/g,Ge).replace(/punct/g,ue).getRegex(),We=g("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,pe).replace(/punctSpace/g,U).replace(/punct/g,q).getRegex(),Ve=g(/\\(punct)/,"gu").replace(/punct/g,q).getRegex(),Ke=g(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Xe=g(F).replace("(?:-->|$)","-->").getRegex(),Je=g("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Xe).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),L=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,Ye=g(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",L).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),de=g(/^!?\[(label)\]\[(ref)\]/).replace("label",L).replace("ref",j).getRegex(),ke=g(/^!?\[(ref)\](?:\[\])?/).replace("ref",j).getRegex(),et=g("reflink|nolink(?!\\()","g").replace("reflink",de).replace("nolink",ke).getRegex(),W={_backpedal:_,anyPunctuation:Ve,autolink:Ke,blockSkip:He,br:ce,code:Ne,del:_,emStrongLDelim:je,emStrongRDelimAst:Qe,emStrongRDelimUnd:We,escape:Ee,link:Ye,nolink:ke,punctuation:Oe,reflink:de,reflinkSearch:et,tag:Je,text:De,url:_},tt={...W,link:g(/^!?\[(label)\]\((.*?)\)/).replace("label",L).getRegex(),reflink:g(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",L).getRegex()},N={...W,emStrongRDelimAst:Ue,emStrongLDelim:Fe,url:g(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},nt={...N,br:g(ce).replace("{2,}","*").getRegex(),text:g(N.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},z={normal:Q,gfm:qe,pedantic:Me},$={normal:W,gfm:N,breaks:nt,pedantic:tt},it={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},te=n=>it[n];function x(n,e){if(e){if(m.escapeTest.test(n))return n.replace(m.escapeReplace,te)}else if(m.escapeTestNoEncode.test(n))return n.replace(m.escapeReplaceNoEncode,te);return n}function ne(n){try{n=encodeURI(n).replace(m.percentDecode,"%")}catch{return null}return n}function ie(n,e){const t=n.replace(m.findPipe,(s,l,a)=>{let h=!1,o=l;for(;--o>=0&&a[o]==="\\";)h=!h;return h?"|":" |"}),r=t.split(m.splitPipe);let i=0;if(r[0].trim()||r.shift(),r.length>0&&!r.at(-1)?.trim()&&r.pop(),e)if(r.length>e)r.splice(e);else for(;r.length<e;)r.push("");for(;i<r.length;i++)r[i]=r[i].trim().replace(m.slashPipe,"|");return r}function R(n,e,t){const r=n.length;if(r===0)return"";let i=0;for(;i<r&&n.charAt(r-i-1)===e;)i++;return n.slice(0,r-i)}function rt(n,e){if(n.indexOf(e[1])===-1)return-1;let t=0;for(let r=0;r<n.length;r++)if(n[r]==="\\")r++;else if(n[r]===e[0])t++;else if(n[r]===e[1]&&(t--,t<0))return r;return t>0?-2:-1}function re(n,e,t,r,i){const s=e.href,l=e.title||null,a=n[1].replace(i.other.outputLinkReplace,"$1");r.state.inLink=!0;const h={type:n[0].charAt(0)==="!"?"image":"link",raw:t,href:s,title:l,text:a,tokens:r.inlineTokens(a)};return r.state.inLink=!1,h}function st(n,e,t){const r=n.match(t.other.indentCodeCompensation);if(r===null)return e;const i=r[1];return e.split(`
`).map(s=>{const l=s.match(t.other.beginningSpace);if(l===null)return s;const[a]=l;return a.length>=i.length?s.slice(i.length):s}).join(`
`)}var I=class{options;rules;lexer;constructor(n){this.options=n||S}space(n){const e=this.rules.block.newline.exec(n);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(n){const e=this.rules.block.code.exec(n);if(e){const t=e[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:e[0],codeBlockStyle:"indented",text:this.options.pedantic?t:R(t,`
`)}}}fences(n){const e=this.rules.block.fences.exec(n);if(e){const t=e[0],r=st(t,e[3]||"",this.rules);return{type:"code",raw:t,lang:e[2]?e[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):e[2],text:r}}}heading(n){const e=this.rules.block.heading.exec(n);if(e){let t=e[2].trim();if(this.rules.other.endingHash.test(t)){const r=R(t,"#");(this.options.pedantic||!r||this.rules.other.endingSpaceChar.test(r))&&(t=r.trim())}return{type:"heading",raw:e[0],depth:e[1].length,text:t,tokens:this.lexer.inline(t)}}}hr(n){const e=this.rules.block.hr.exec(n);if(e)return{type:"hr",raw:R(e[0],`
`)}}blockquote(n){const e=this.rules.block.blockquote.exec(n);if(e){let t=R(e[0],`
`).split(`
`),r="",i="";const s=[];for(;t.length>0;){let l=!1;const a=[];let h;for(h=0;h<t.length;h++)if(this.rules.other.blockquoteStart.test(t[h]))a.push(t[h]),l=!0;else if(!l)a.push(t[h]);else break;t=t.slice(h);const o=a.join(`
`),c=o.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");r=r?`${r}
${o}`:o,i=i?`${i}
${c}`:c;const d=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(c,s,!0),this.lexer.state.top=d,t.length===0)break;const p=s.at(-1);if(p?.type==="code")break;if(p?.type==="blockquote"){const k=p,f=k.raw+`
`+t.join(`
`),b=this.blockquote(f);s[s.length-1]=b,r=r.substring(0,r.length-k.raw.length)+b.raw,i=i.substring(0,i.length-k.text.length)+b.text;break}else if(p?.type==="list"){const k=p,f=k.raw+`
`+t.join(`
`),b=this.list(f);s[s.length-1]=b,r=r.substring(0,r.length-p.raw.length)+b.raw,i=i.substring(0,i.length-k.raw.length)+b.raw,t=f.substring(s.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:r,tokens:s,text:i}}}list(n){let e=this.rules.block.list.exec(n);if(e){let t=e[1].trim();const r=t.length>1,i={type:"list",raw:"",ordered:r,start:r?+t.slice(0,-1):"",loose:!1,items:[]};t=r?`\\d{1,9}\\${t.slice(-1)}`:`\\${t}`,this.options.pedantic&&(t=r?t:"[*+-]");const s=this.rules.other.listItemRegex(t);let l=!1;for(;n;){let h=!1,o="",c="";if(!(e=s.exec(n))||this.rules.block.hr.test(n))break;o=e[0],n=n.substring(o.length);let d=e[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,M=>" ".repeat(3*M.length)),p=n.split(`
`,1)[0],k=!d.trim(),f=0;if(this.options.pedantic?(f=2,c=d.trimStart()):k?f=e[1].length+1:(f=e[2].search(this.rules.other.nonSpaceChar),f=f>4?1:f,c=d.slice(f),f+=e[1].length),k&&this.rules.other.blankLine.test(p)&&(o+=p+`
`,n=n.substring(p.length+1),h=!0),!h){const M=this.rules.other.nextBulletRegex(f),X=this.rules.other.hrRegex(f),J=this.rules.other.fencesBeginRegex(f),Y=this.rules.other.headingBeginRegex(f),be=this.rules.other.htmlBeginRegex(f);for(;n;){const E=n.split(`
`,1)[0];let T;if(p=E,this.options.pedantic?(p=p.replace(this.rules.other.listReplaceNesting,"  "),T=p):T=p.replace(this.rules.other.tabCharGlobal,"    "),J.test(p)||Y.test(p)||be.test(p)||M.test(p)||X.test(p))break;if(T.search(this.rules.other.nonSpaceChar)>=f||!p.trim())c+=`
`+T.slice(f);else{if(k||d.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||J.test(d)||Y.test(d)||X.test(d))break;c+=`
`+p}!k&&!p.trim()&&(k=!0),o+=E+`
`,n=n.substring(E.length+1),d=T.slice(f)}}i.loose||(l?i.loose=!0:this.rules.other.doubleBlankLine.test(o)&&(l=!0));let b=null,K;this.options.gfm&&(b=this.rules.other.listIsTask.exec(c),b&&(K=b[0]!=="[ ] ",c=c.replace(this.rules.other.listReplaceTask,""))),i.items.push({type:"list_item",raw:o,task:!!b,checked:K,loose:!1,text:c,tokens:[]}),i.raw+=o}const a=i.items.at(-1);if(a)a.raw=a.raw.trimEnd(),a.text=a.text.trimEnd();else return;i.raw=i.raw.trimEnd();for(let h=0;h<i.items.length;h++)if(this.lexer.state.top=!1,i.items[h].tokens=this.lexer.blockTokens(i.items[h].text,[]),!i.loose){const o=i.items[h].tokens.filter(d=>d.type==="space"),c=o.length>0&&o.some(d=>this.rules.other.anyLine.test(d.raw));i.loose=c}if(i.loose)for(let h=0;h<i.items.length;h++)i.items[h].loose=!0;return i}}html(n){const e=this.rules.block.html.exec(n);if(e)return{type:"html",block:!0,raw:e[0],pre:e[1]==="pre"||e[1]==="script"||e[1]==="style",text:e[0]}}def(n){const e=this.rules.block.def.exec(n);if(e){const t=e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),r=e[2]?e[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",i=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):e[3];return{type:"def",tag:t,raw:e[0],href:r,title:i}}}table(n){const e=this.rules.block.table.exec(n);if(!e||!this.rules.other.tableDelimiter.test(e[2]))return;const t=ie(e[1]),r=e[2].replace(this.rules.other.tableAlignChars,"").split("|"),i=e[3]?.trim()?e[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],s={type:"table",raw:e[0],header:[],align:[],rows:[]};if(t.length===r.length){for(const l of r)this.rules.other.tableAlignRight.test(l)?s.align.push("right"):this.rules.other.tableAlignCenter.test(l)?s.align.push("center"):this.rules.other.tableAlignLeft.test(l)?s.align.push("left"):s.align.push(null);for(let l=0;l<t.length;l++)s.header.push({text:t[l],tokens:this.lexer.inline(t[l]),header:!0,align:s.align[l]});for(const l of i)s.rows.push(ie(l,s.header.length).map((a,h)=>({text:a,tokens:this.lexer.inline(a),header:!1,align:s.align[h]})));return s}}lheading(n){const e=this.rules.block.lheading.exec(n);if(e)return{type:"heading",raw:e[0],depth:e[2].charAt(0)==="="?1:2,text:e[1],tokens:this.lexer.inline(e[1])}}paragraph(n){const e=this.rules.block.paragraph.exec(n);if(e){const t=e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:t,tokens:this.lexer.inline(t)}}}text(n){const e=this.rules.block.text.exec(n);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(n){const e=this.rules.inline.escape.exec(n);if(e)return{type:"escape",raw:e[0],text:e[1]}}tag(n){const e=this.rules.inline.tag.exec(n);if(e)return!this.lexer.state.inLink&&this.rules.other.startATag.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:e[0]}}link(n){const e=this.rules.inline.link.exec(n);if(e){const t=e[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(t)){if(!this.rules.other.endAngleBracket.test(t))return;const s=R(t.slice(0,-1),"\\");if((t.length-s.length)%2===0)return}else{const s=rt(e[2],"()");if(s===-2)return;if(s>-1){const a=(e[0].indexOf("!")===0?5:4)+e[1].length+s;e[2]=e[2].substring(0,s),e[0]=e[0].substring(0,a).trim(),e[3]=""}}let r=e[2],i="";if(this.options.pedantic){const s=this.rules.other.pedanticHrefTitle.exec(r);s&&(r=s[1],i=s[3])}else i=e[3]?e[3].slice(1,-1):"";return r=r.trim(),this.rules.other.startAngleBracket.test(r)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(t)?r=r.slice(1):r=r.slice(1,-1)),re(e,{href:r&&r.replace(this.rules.inline.anyPunctuation,"$1"),title:i&&i.replace(this.rules.inline.anyPunctuation,"$1")},e[0],this.lexer,this.rules)}}reflink(n,e){let t;if((t=this.rules.inline.reflink.exec(n))||(t=this.rules.inline.nolink.exec(n))){const r=(t[2]||t[1]).replace(this.rules.other.multipleSpaceGlobal," "),i=e[r.toLowerCase()];if(!i){const s=t[0].charAt(0);return{type:"text",raw:s,text:s}}return re(t,i,t[0],this.lexer,this.rules)}}emStrong(n,e,t=""){let r=this.rules.inline.emStrongLDelim.exec(n);if(!r||r[3]&&t.match(this.rules.other.unicodeAlphaNumeric))return;if(!(r[1]||r[2]||"")||!t||this.rules.inline.punctuation.exec(t)){const s=[...r[0]].length-1;let l,a,h=s,o=0;const c=r[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(c.lastIndex=0,e=e.slice(-1*n.length+s);(r=c.exec(e))!=null;){if(l=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!l)continue;if(a=[...l].length,r[3]||r[4]){h+=a;continue}else if((r[5]||r[6])&&s%3&&!((s+a)%3)){o+=a;continue}if(h-=a,h>0)continue;a=Math.min(a,a+h+o);const d=[...r[0]][0].length,p=n.slice(0,s+r.index+d+a);if(Math.min(s,a)%2){const f=p.slice(1,-1);return{type:"em",raw:p,text:f,tokens:this.lexer.inlineTokens(f)}}const k=p.slice(2,-2);return{type:"strong",raw:p,text:k,tokens:this.lexer.inlineTokens(k)}}}}codespan(n){const e=this.rules.inline.code.exec(n);if(e){let t=e[2].replace(this.rules.other.newLineCharGlobal," ");const r=this.rules.other.nonSpaceChar.test(t),i=this.rules.other.startingSpaceChar.test(t)&&this.rules.other.endingSpaceChar.test(t);return r&&i&&(t=t.substring(1,t.length-1)),{type:"codespan",raw:e[0],text:t}}}br(n){const e=this.rules.inline.br.exec(n);if(e)return{type:"br",raw:e[0]}}del(n){const e=this.rules.inline.del.exec(n);if(e)return{type:"del",raw:e[0],text:e[2],tokens:this.lexer.inlineTokens(e[2])}}autolink(n){const e=this.rules.inline.autolink.exec(n);if(e){let t,r;return e[2]==="@"?(t=e[1],r="mailto:"+t):(t=e[1],r=t),{type:"link",raw:e[0],text:t,href:r,tokens:[{type:"text",raw:t,text:t}]}}}url(n){let e;if(e=this.rules.inline.url.exec(n)){let t,r;if(e[2]==="@")t=e[0],r="mailto:"+t;else{let i;do i=e[0],e[0]=this.rules.inline._backpedal.exec(e[0])?.[0]??"";while(i!==e[0]);t=e[0],e[1]==="www."?r="http://"+e[0]:r=e[0]}return{type:"link",raw:e[0],text:t,href:r,tokens:[{type:"text",raw:t,text:t}]}}}inlineText(n){const e=this.rules.inline.text.exec(n);if(e){const t=this.lexer.state.inRawBlock;return{type:"text",raw:e[0],text:e[0],escaped:t}}}},w=class D{tokens;options;state;tokenizer;inlineQueue;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||S,this.options.tokenizer=this.options.tokenizer||new I,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={other:m,block:z.normal,inline:$.normal};this.options.pedantic?(t.block=z.pedantic,t.inline=$.pedantic):this.options.gfm&&(t.block=z.gfm,this.options.breaks?t.inline=$.breaks:t.inline=$.gfm),this.tokenizer.rules=t}static get rules(){return{block:z,inline:$}}static lex(e,t){return new D(t).lex(e)}static lexInline(e,t){return new D(t).inlineTokens(e)}lex(e){e=e.replace(m.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let t=0;t<this.inlineQueue.length;t++){const r=this.inlineQueue[t];this.inlineTokens(r.src,r.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],r=!1){for(this.options.pedantic&&(e=e.replace(m.tabCharGlobal,"    ").replace(m.spaceLine,""));e;){let i;if(this.options.extensions?.block?.some(l=>(i=l.call({lexer:this},e,t))?(e=e.substring(i.raw.length),t.push(i),!0):!1))continue;if(i=this.tokenizer.space(e)){e=e.substring(i.raw.length);const l=t.at(-1);i.raw.length===1&&l!==void 0?l.raw+=`
`:t.push(i);continue}if(i=this.tokenizer.code(e)){e=e.substring(i.raw.length);const l=t.at(-1);l?.type==="paragraph"||l?.type==="text"?(l.raw+=`
`+i.raw,l.text+=`
`+i.text,this.inlineQueue.at(-1).src=l.text):t.push(i);continue}if(i=this.tokenizer.fences(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.heading(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.hr(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.blockquote(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.list(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.html(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.def(e)){e=e.substring(i.raw.length);const l=t.at(-1);l?.type==="paragraph"||l?.type==="text"?(l.raw+=`
`+i.raw,l.text+=`
`+i.raw,this.inlineQueue.at(-1).src=l.text):this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title});continue}if(i=this.tokenizer.table(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.lheading(e)){e=e.substring(i.raw.length),t.push(i);continue}let s=e;if(this.options.extensions?.startBlock){let l=1/0;const a=e.slice(1);let h;this.options.extensions.startBlock.forEach(o=>{h=o.call({lexer:this},a),typeof h=="number"&&h>=0&&(l=Math.min(l,h))}),l<1/0&&l>=0&&(s=e.substring(0,l+1))}if(this.state.top&&(i=this.tokenizer.paragraph(s))){const l=t.at(-1);r&&l?.type==="paragraph"?(l.raw+=`
`+i.raw,l.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=l.text):t.push(i),r=s.length!==e.length,e=e.substring(i.raw.length);continue}if(i=this.tokenizer.text(e)){e=e.substring(i.raw.length);const l=t.at(-1);l?.type==="text"?(l.raw+=`
`+i.raw,l.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=l.text):t.push(i);continue}if(e){const l="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(l);break}else throw new Error(l)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){let r=e,i=null;if(this.tokens.links){const a=Object.keys(this.tokens.links);if(a.length>0)for(;(i=this.tokenizer.rules.inline.reflinkSearch.exec(r))!=null;)a.includes(i[0].slice(i[0].lastIndexOf("[")+1,-1))&&(r=r.slice(0,i.index)+"["+"a".repeat(i[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(i=this.tokenizer.rules.inline.anyPunctuation.exec(r))!=null;)r=r.slice(0,i.index)+"++"+r.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;(i=this.tokenizer.rules.inline.blockSkip.exec(r))!=null;)r=r.slice(0,i.index)+"["+"a".repeat(i[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);let s=!1,l="";for(;e;){s||(l=""),s=!1;let a;if(this.options.extensions?.inline?.some(o=>(a=o.call({lexer:this},e,t))?(e=e.substring(a.raw.length),t.push(a),!0):!1))continue;if(a=this.tokenizer.escape(e)){e=e.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.tag(e)){e=e.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.link(e)){e=e.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(a.raw.length);const o=t.at(-1);a.type==="text"&&o?.type==="text"?(o.raw+=a.raw,o.text+=a.text):t.push(a);continue}if(a=this.tokenizer.emStrong(e,r,l)){e=e.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.codespan(e)){e=e.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.br(e)){e=e.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.del(e)){e=e.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.autolink(e)){e=e.substring(a.raw.length),t.push(a);continue}if(!this.state.inLink&&(a=this.tokenizer.url(e))){e=e.substring(a.raw.length),t.push(a);continue}let h=e;if(this.options.extensions?.startInline){let o=1/0;const c=e.slice(1);let d;this.options.extensions.startInline.forEach(p=>{d=p.call({lexer:this},c),typeof d=="number"&&d>=0&&(o=Math.min(o,d))}),o<1/0&&o>=0&&(h=e.substring(0,o+1))}if(a=this.tokenizer.inlineText(h)){e=e.substring(a.raw.length),a.raw.slice(-1)!=="_"&&(l=a.raw.slice(-1)),s=!0;const o=t.at(-1);o?.type==="text"?(o.raw+=a.raw,o.text+=a.text):t.push(a);continue}if(e){const o="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(o);break}else throw new Error(o)}}return t}},P=class{options;parser;constructor(n){this.options=n||S}space(n){return""}code({text:n,lang:e,escaped:t}){const r=(e||"").match(m.notSpaceStart)?.[0],i=n.replace(m.endingNewline,"")+`
`;return r?'<pre><code class="language-'+x(r)+'">'+(t?i:x(i,!0))+`</code></pre>
`:"<pre><code>"+(t?i:x(i,!0))+`</code></pre>
`}blockquote({tokens:n}){return`<blockquote>
${this.parser.parse(n)}</blockquote>
`}html({text:n}){return n}heading({tokens:n,depth:e}){return`<h${e}>${this.parser.parseInline(n)}</h${e}>
`}hr(n){return`<hr>
`}list(n){const e=n.ordered,t=n.start;let r="";for(let l=0;l<n.items.length;l++){const a=n.items[l];r+=this.listitem(a)}const i=e?"ol":"ul",s=e&&t!==1?' start="'+t+'"':"";return"<"+i+s+`>
`+r+"</"+i+`>
`}listitem(n){let e="";if(n.task){const t=this.checkbox({checked:!!n.checked});n.loose?n.tokens[0]?.type==="paragraph"?(n.tokens[0].text=t+" "+n.tokens[0].text,n.tokens[0].tokens&&n.tokens[0].tokens.length>0&&n.tokens[0].tokens[0].type==="text"&&(n.tokens[0].tokens[0].text=t+" "+x(n.tokens[0].tokens[0].text),n.tokens[0].tokens[0].escaped=!0)):n.tokens.unshift({type:"text",raw:t+" ",text:t+" ",escaped:!0}):e+=t+" "}return e+=this.parser.parse(n.tokens,!!n.loose),`<li>${e}</li>
`}checkbox({checked:n}){return"<input "+(n?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:n}){return`<p>${this.parser.parseInline(n)}</p>
`}table(n){let e="",t="";for(let i=0;i<n.header.length;i++)t+=this.tablecell(n.header[i]);e+=this.tablerow({text:t});let r="";for(let i=0;i<n.rows.length;i++){const s=n.rows[i];t="";for(let l=0;l<s.length;l++)t+=this.tablecell(s[l]);r+=this.tablerow({text:t})}return r&&(r=`<tbody>${r}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+r+`</table>
`}tablerow({text:n}){return`<tr>
${n}</tr>
`}tablecell(n){const e=this.parser.parseInline(n.tokens),t=n.header?"th":"td";return(n.align?`<${t} align="${n.align}">`:`<${t}>`)+e+`</${t}>
`}strong({tokens:n}){return`<strong>${this.parser.parseInline(n)}</strong>`}em({tokens:n}){return`<em>${this.parser.parseInline(n)}</em>`}codespan({text:n}){return`<code>${x(n,!0)}</code>`}br(n){return"<br>"}del({tokens:n}){return`<del>${this.parser.parseInline(n)}</del>`}link({href:n,title:e,tokens:t}){const r=this.parser.parseInline(t),i=ne(n);if(i===null)return r;n=i;let s='<a href="'+n+'"';return e&&(s+=' title="'+x(e)+'"'),s+=">"+r+"</a>",s}image({href:n,title:e,text:t,tokens:r}){r&&(t=this.parser.parseInline(r,this.parser.textRenderer));const i=ne(n);if(i===null)return x(t);n=i;let s=`<img src="${n}" alt="${t}"`;return e&&(s+=` title="${x(e)}"`),s+=">",s}text(n){return"tokens"in n&&n.tokens?this.parser.parseInline(n.tokens):"escaped"in n&&n.escaped?n.text:x(n.text)}},V=class{strong({text:n}){return n}em({text:n}){return n}codespan({text:n}){return n}del({text:n}){return n}html({text:n}){return n}text({text:n}){return n}link({text:n}){return""+n}image({text:n}){return""+n}br(){return""}},y=class O{options;renderer;textRenderer;constructor(e){this.options=e||S,this.options.renderer=this.options.renderer||new P,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new V}static parse(e,t){return new O(t).parse(e)}static parseInline(e,t){return new O(t).parseInline(e)}parse(e,t=!0){let r="";for(let i=0;i<e.length;i++){const s=e[i];if(this.options.extensions?.renderers?.[s.type]){const a=s,h=this.options.extensions.renderers[a.type].call({parser:this},a);if(h!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(a.type)){r+=h||"";continue}}const l=s;switch(l.type){case"space":{r+=this.renderer.space(l);continue}case"hr":{r+=this.renderer.hr(l);continue}case"heading":{r+=this.renderer.heading(l);continue}case"code":{r+=this.renderer.code(l);continue}case"table":{r+=this.renderer.table(l);continue}case"blockquote":{r+=this.renderer.blockquote(l);continue}case"list":{r+=this.renderer.list(l);continue}case"html":{r+=this.renderer.html(l);continue}case"paragraph":{r+=this.renderer.paragraph(l);continue}case"text":{let a=l,h=this.renderer.text(a);for(;i+1<e.length&&e[i+1].type==="text";)a=e[++i],h+=`
`+this.renderer.text(a);t?r+=this.renderer.paragraph({type:"paragraph",raw:h,text:h,tokens:[{type:"text",raw:h,text:h,escaped:!0}]}):r+=h;continue}default:{const a='Token with "'+l.type+'" type was not found.';if(this.options.silent)return console.error(a),"";throw new Error(a)}}}return r}parseInline(e,t=this.renderer){let r="";for(let i=0;i<e.length;i++){const s=e[i];if(this.options.extensions?.renderers?.[s.type]){const a=this.options.extensions.renderers[s.type].call({parser:this},s);if(a!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(s.type)){r+=a||"";continue}}const l=s;switch(l.type){case"escape":{r+=t.text(l);break}case"html":{r+=t.html(l);break}case"link":{r+=t.link(l);break}case"image":{r+=t.image(l);break}case"strong":{r+=t.strong(l);break}case"em":{r+=t.em(l);break}case"codespan":{r+=t.codespan(l);break}case"br":{r+=t.br(l);break}case"del":{r+=t.del(l);break}case"text":{r+=t.text(l);break}default:{const a='Token with "'+l.type+'" type was not found.';if(this.options.silent)return console.error(a),"";throw new Error(a)}}}return r}},C=class{options;block;constructor(n){this.options=n||S}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(n){return n}postprocess(n){return n}processAllTokens(n){return n}provideLexer(){return this.block?w.lex:w.lexInline}provideParser(){return this.block?y.parse:y.parseInline}},lt=class{defaults=G();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=y;Renderer=P;TextRenderer=V;Lexer=w;Tokenizer=I;Hooks=C;constructor(...n){this.use(...n)}walkTokens(n,e){let t=[];for(const r of n)switch(t=t.concat(e.call(this,r)),r.type){case"table":{const i=r;for(const s of i.header)t=t.concat(this.walkTokens(s.tokens,e));for(const s of i.rows)for(const l of s)t=t.concat(this.walkTokens(l.tokens,e));break}case"list":{const i=r;t=t.concat(this.walkTokens(i.items,e));break}default:{const i=r;this.defaults.extensions?.childTokens?.[i.type]?this.defaults.extensions.childTokens[i.type].forEach(s=>{const l=i[s].flat(1/0);t=t.concat(this.walkTokens(l,e))}):i.tokens&&(t=t.concat(this.walkTokens(i.tokens,e)))}}return t}use(...n){const e=this.defaults.extensions||{renderers:{},childTokens:{}};return n.forEach(t=>{const r={...t};if(r.async=this.defaults.async||r.async||!1,t.extensions&&(t.extensions.forEach(i=>{if(!i.name)throw new Error("extension name required");if("renderer"in i){const s=e.renderers[i.name];s?e.renderers[i.name]=function(...l){let a=i.renderer.apply(this,l);return a===!1&&(a=s.apply(this,l)),a}:e.renderers[i.name]=i.renderer}if("tokenizer"in i){if(!i.level||i.level!=="block"&&i.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const s=e[i.level];s?s.unshift(i.tokenizer):e[i.level]=[i.tokenizer],i.start&&(i.level==="block"?e.startBlock?e.startBlock.push(i.start):e.startBlock=[i.start]:i.level==="inline"&&(e.startInline?e.startInline.push(i.start):e.startInline=[i.start]))}"childTokens"in i&&i.childTokens&&(e.childTokens[i.name]=i.childTokens)}),r.extensions=e),t.renderer){const i=this.defaults.renderer||new P(this.defaults);for(const s in t.renderer){if(!(s in i))throw new Error(`renderer '${s}' does not exist`);if(["options","parser"].includes(s))continue;const l=s,a=t.renderer[l],h=i[l];i[l]=(...o)=>{let c=a.apply(i,o);return c===!1&&(c=h.apply(i,o)),c||""}}r.renderer=i}if(t.tokenizer){const i=this.defaults.tokenizer||new I(this.defaults);for(const s in t.tokenizer){if(!(s in i))throw new Error(`tokenizer '${s}' does not exist`);if(["options","rules","lexer"].includes(s))continue;const l=s,a=t.tokenizer[l],h=i[l];i[l]=(...o)=>{let c=a.apply(i,o);return c===!1&&(c=h.apply(i,o)),c}}r.tokenizer=i}if(t.hooks){const i=this.defaults.hooks||new C;for(const s in t.hooks){if(!(s in i))throw new Error(`hook '${s}' does not exist`);if(["options","block"].includes(s))continue;const l=s,a=t.hooks[l],h=i[l];C.passThroughHooks.has(s)?i[l]=o=>{if(this.defaults.async)return Promise.resolve(a.call(i,o)).then(d=>h.call(i,d));const c=a.call(i,o);return h.call(i,c)}:i[l]=(...o)=>{let c=a.apply(i,o);return c===!1&&(c=h.apply(i,o)),c}}r.hooks=i}if(t.walkTokens){const i=this.defaults.walkTokens,s=t.walkTokens;r.walkTokens=function(l){let a=[];return a.push(s.call(this,l)),i&&(a=a.concat(i.call(this,l))),a}}this.defaults={...this.defaults,...r}}),this}setOptions(n){return this.defaults={...this.defaults,...n},this}lexer(n,e){return w.lex(n,e??this.defaults)}parser(n,e){return y.parse(n,e??this.defaults)}parseMarkdown(n){return(t,r)=>{const i={...r},s={...this.defaults,...i},l=this.onError(!!s.silent,!!s.async);if(this.defaults.async===!0&&i.async===!1)return l(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof t>"u"||t===null)return l(new Error("marked(): input parameter is undefined or null"));if(typeof t!="string")return l(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected"));s.hooks&&(s.hooks.options=s,s.hooks.block=n);const a=s.hooks?s.hooks.provideLexer():n?w.lex:w.lexInline,h=s.hooks?s.hooks.provideParser():n?y.parse:y.parseInline;if(s.async)return Promise.resolve(s.hooks?s.hooks.preprocess(t):t).then(o=>a(o,s)).then(o=>s.hooks?s.hooks.processAllTokens(o):o).then(o=>s.walkTokens?Promise.all(this.walkTokens(o,s.walkTokens)).then(()=>o):o).then(o=>h(o,s)).then(o=>s.hooks?s.hooks.postprocess(o):o).catch(l);try{s.hooks&&(t=s.hooks.preprocess(t));let o=a(t,s);s.hooks&&(o=s.hooks.processAllTokens(o)),s.walkTokens&&this.walkTokens(o,s.walkTokens);let c=h(o,s);return s.hooks&&(c=s.hooks.postprocess(c)),c}catch(o){return l(o)}}}onError(n,e){return t=>{if(t.message+=`
Please report this to https://github.com/markedjs/marked.`,n){const r="<p>An error occurred:</p><pre>"+x(t.message+"",!0)+"</pre>";return e?Promise.resolve(r):r}if(e)return Promise.reject(t);throw t}}},v=new lt;function u(n,e){return v.parse(n,e)}u.options=u.setOptions=function(n){return v.setOptions(n),u.defaults=v.defaults,le(u.defaults),u};u.getDefaults=G;u.defaults=S;u.use=function(...n){return v.use(...n),u.defaults=v.defaults,le(u.defaults),u};u.walkTokens=function(n,e){return v.walkTokens(n,e)};u.parseInline=v.parseInline;u.Parser=y;u.parser=y.parse;u.Renderer=P;u.TextRenderer=V;u.Lexer=w;u.lexer=w.lex;u.Tokenizer=I;u.Hooks=C;u.parse=u;u.options;u.setOptions;u.use;u.walkTokens;u.parseInline;y.parse;w.lex;u.setOptions({gfm:!0,breaks:!0});function at(n){const e=n.match(/^---\r?\n([\s\S]*?)\r?\n---\s*(\r?\n|$)/);return e?{meta:ot(e[1]),body:n.slice(e[0].length)}:{meta:{},body:n}}function ot(n){const e={};let t=null;for(const r of n.split(/\r?\n/)){const i=r.trim();if(!i||i.startsWith("#"))continue;const s=r.match(/^\s*-\s+(.+)$/);if(s&&t){Array.isArray(e[t])||(e[t]=e[t]===""?[]:[e[t]]),e[t].push(se(s[1]));continue}const l=r.match(/^([\w-]+)\s*:\s*(.*)$/);l&&(t=l[1],e[t]=se(l[2]))}return e}function se(n){let e=n.trim();return e.startsWith("[")&&e.endsWith("]")?e.slice(1,-1).split(",").map(t=>t.trim().replace(/^["']|["']$/g,"")).filter(Boolean):((e.startsWith('"')&&e.endsWith('"')||e.startsWith("'")&&e.endsWith("'"))&&(e=e.slice(1,-1)),e)}function gt(n){return u.parse(n)}const ht=Object.assign({"../content/thanh-vien/le-cam-li.md":xe,"../content/thanh-vien/nguyen-minh-anh.md":we,"../content/thanh-vien/tran-quoc-bao.md":ye}),ct=Object.assign({"../content/bai-tap/bai-1.md":ve,"../content/bai-tap/bai-2.md":Se,"../content/bai-tap/bai-3.md":Te}),pt=n=>n.split("/").pop().replace(/\.md$/,"");function ut(n,e){const t=n.meta.order??999,r=e.meta.order??999;return t-r||n.slug.localeCompare(e.slug,void 0,{numeric:!0})}function me(n){return Object.entries(n).map(([e,t])=>({slug:pt(e),...at(t)})).sort(ut)}const ft=me(ht),dt=me(ct);function kt(n){return String(n??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function mt(n){const t=`<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160">
    <rect width="160" height="160" fill="#e3e9f5"/>
    <text x="80" y="84" font-family="system-ui, sans-serif" font-size="64" font-weight="700"
      fill="#5b6b8c" text-anchor="middle" dominant-baseline="central">${(String(n||"?").trim()[0]||"?").toUpperCase()}</text>
  </svg>`;return"data:image/svg+xml;utf8,"+encodeURIComponent(t)}function bt(n){const e=String(n).toLowerCase();return e.includes("chưa")?"badge-todo":e.includes("hoàn thành")?"badge-ok":e.includes("đang")?"badge-doing":"badge-todo"}export{dt as a,bt as b,mt as c,kt as e,ft as m,gt as r};
