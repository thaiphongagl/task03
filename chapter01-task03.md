http://aglstaff.allgrow-labo.jp/nguyenthanhquy/agl-task03/

//requirement:
Chapter 01
Code 1 trang Landing page tĩnh theo task mentha_oil_lp (Task03)

Files thiết kế

https://drive.google.com/drive/folders/1Rq7qz8mf0dDM0MKseHcVmrWqlzgYZQD6?usp=sharing

Yêu cầu công việc

Kiểm tra file design (PSD) và mark up bằng EJS/SASS. Website tham khảo:
EJS -- Embedded JavaScript templates
Hướng dẫn học SCSS | Học web chuẩn (hocwebchuan.com)
Xuất file ảnh bằng cách lựa chọn định dạng phù hợp (JPEG/PNG/SVG).
Đặt heading tag (h1, h2, h3 etc) phù hợp.
Phẩn Q&A sử dụng tag dl, dt, dd.
Breakpoint: 768px.
Xử lý animation như trong file đính kèm.
Nhiệm vụ và điểm quan trọng

Design SP được thiết kế ở kích thước 750px là để hỗ trợ màn hình Retina. Tất cả thông số phải được chia 2 khi hiển thị (check perfect pixel ở màn hình 375px).
Hiểu được chủng loại file ảnh và cách sử dụng của mỗi loại.
Với những hình ảnh chứa nhiều nội dung như ảnh chụp thì nên chọn file JPEG với độ nén cao.
Với những hình ảnh bitmap cần có độ xuyên thấu thì nên chọn file PNG.
Với những hình ảnh vector chứa ít thông tin thì có thể sử dụng file SVG, tuy nhiên cần lưu ý đến xử lí trên IE11.
Biết sử dụng tag h1~h6 một cách hợp lí
Bất kể độ lớn theo design của một yếu tố ra sao, nó vẫn phải tồn tại ở vị trí thích hợp khi xem HTML như một văn bản.
Xét từ góc độ SEO thì trong văn bản chỉ được phép tồn tại 1 tag h1, trong khi những tag h khác có thể tồn tại ở số nhiều.
Xét từ góc độ khả năng tiếp cận (accessibility) thì h1~h6 nên được sắp xếp theo thứ tự tăng dần.
Đối với hình ảnh bo góc trên design thì ta sẽ không xuất file với góc bo mà sẽ chuyển nó thành ảnh có 4 góc xuông rồi thể hiện phần bo góc đó bằng CSS properties. (Kích thước ảnh sẽ bị thu nhỏ khi đọc trên màn hình smartphone. Khi đó, nếu sử dụng ảnh bo góc sẵn thì bán kính góc bo tròn cũng sẽ bị thu hẹp. Ngược lại, nếu điều khiển bằng CSS properties thì ta sẽ có thể chỉ định bán kính góc bo theo bề ngang ảnh. Đó là lí do ta phải chọn cách xử lí này.)
Hiểu được cách cài đặt "font-family" cho font chữ tiếng Nhật.
Cũng giống như font chữ tiếng Anh, font tiếng Nhật cũng được chia ra thành serif và san-serif.
Các thiết bị được sử dụng trong nước Nhật bao gồm Windows, Mac, iPhone, Android, và font serif, san-serif được install trên các thiết bị đó đều khác nhau.
Việc font có hiển thị chính xác hay không chịu ảnh hưởng bởi tên font được đăng kí trên thiết bị. Do vậy, có những trường hợp ta sẽ phải đăng kí nhiều tên cho cùng một font.
Phần lớn các khoảng cách dòng, khoảng cách text được định sẵn giá trị bằng số trong file design đều có thể tái hiện bằng CSS, nhưng cũng có trường hợp phải tái hiện design một cách tỉ mỉ hơn bằng cách điều chỉnh các properties như line-height, letter-spacing.
Với các background có tính lặp lại thì hãy sử dụng properties như background-repeat để tái sử dụng source code một cách hiệu quả.
Đối với các object cần xê dịch thì hãy sử dụng chính xác position, transform, background-position, v.v...
