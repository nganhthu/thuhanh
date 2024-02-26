//js xử lý sự kiện và logic
const studentinforform = document.getElementById('student-infor-form');
const quizContainer = document.getElementById('quiz');
const questioncontainer = document.getElementById('question-group');
var questionNumber = 1;


function startQuiz(){
    if(studentinforform.checkValidity()){
        document.getElementById('info-form').style.display='none';
        quizContainer.style.display = 'block';
        //tạo và hiển thị câu hỏi
    } else {
        alert('Vui lòng nhập đủ thông tin');
    }
}

// Lấy phần tử chứa nhóm câu hỏi đúng/sai
var trueFalseQuestionGroup = document.getElementById("group1");
var multipleChoiceQuestionGroup = document.getElementById("group2");
var multipleAnswersQuestionGroup = document.getElementById("group3");
var essayQuestionGroup = document.getElementById("group4");

var trueFalseQuestions = [
    "Trái đất là hành tinh thứ sáu tính từ mặt trời ra ngoài.",
    "Cảm giác mặn của nước biển chủ yếu do sự có mặt của muối.",
    "Có 10 năm nhuận trong một thập kỷ.",
    "Cá voi là loài động vật có não lớn nhất trên trái đất.",
    "Sơn Tây là thủ đô của Việt Nam.",
    "Nước có thể tồn tại ở ba dạng: rắn, lỏng và khí.",
    "Cát là một loại khoáng vật.",
    "Đại dương Thái Bình Dương rộng lớn nhất thế giới.",
    "Trong phép tính toán, phép chia không thể thực hiện khi số bị chia bằng 0.",
    "Sigmund Freud là một nhà triết học nổi tiếng."
];

var essayQuestions = [
    "Miêu tả quá trình phát triển của một hòn đảo từ lúc nó hình thành đến khi có sự sinh sống của các loài động và thực vật.",
    "Tại sao việc bảo vệ môi trường là quan trọng và những biện pháp nào có thể được thực hiện để giữ gìn môi trường xanh sạch đẹp?",
    "Trình bày và giải thích các dạng biến đổi khí hậu và tác động của chúng lên cuộc sống của con người và hệ sinh thái.",
    "Hãy trình bày và so sánh giữa năng lượng tái tạo và năng lượng không tái tạo, bao gồm ưu nhược điểm và tác động của chúng đối với môi trường.",
    "Tại sao việc đọc sách là một thói quen tốt và làm thế nào để khuyến khích việc đọc sách trong xã hội?",
    "Phân tích vai trò của công nghệ thông tin và truyền thông trong cuộc sống hàng ngày của chúng ta và những ảnh hưởng tích cực và tiêu cực của nó.",
    "Hãy trình bày ý kiến của bạn về việc sử dụng năng lượng hạt nhân để sản xuất điện và các vấn đề liên quan đến an toàn và môi trường.",
    "Đánh giá tầm quan trọng của giáo dục và vai trò của giáo viên trong việc phát triển xã hội và kinh tế của một quốc gia.",
    "Trình bày và phân tích những nguyên nhân và hậu quả của biến đổi khí hậu và biện pháp cần thiết để giảm thiểu tác động của nó.",
    "So sánh giữa hệ thống chính trị dân chủ và hệ thống chính trị độc tài, bao gồm ưu và nhược điểm của mỗi hệ thống."
];


var multipleAnswersQuestions = [
    {
        question: "Các loại hình năng lượng tái tạo bao gồm:",
        answers: ["a) Năng lượng mặt trời", "b) Năng lượng gió", "c) Năng lượng hạt nhân", "d) Năng lượng than đá"]
    },
    {
        question: "Các loại hình nghệ thuật hình học bao gồm:",
        answers: ["a) Hội họa", "b) Điêu khắc", "c) Kiến trúc", "d) Âm nhạc"]
    },
    {
        question: "Các ngôn ngữ lập trình thông dụng là:",
        answers: ["a) Python", "b) Java", "c) C++", "d) HTML", "e) JavaScript"]
    },
    {
        question: "Các loài động vật có vú bao gồm:",
        answers: ["a) Chó", "b) Mèo", "c) Vịt", "d) Cá voi", "e) Ngựa"]
    },
    {
        question: "Các thành phố nổi tiếng thế giới là:",
        answers: ["a) Paris", "b) Tokyo", "c) New York", "d) London", "e) Sydney"]
    },
    {
        question: "Các nguyên tố hóa học trong bảng tuần hoàn gồm:",
        answers: ["a) Hiđrô", "b) Oxy", "c) Heli", "d) Nhôm", "e) Sắt"]
    },
    {
        question: "Các loại thức ăn hình cầu bao gồm:",
        answers: ["a) Cà chua", "b) Dưa hấu", "c) Quả bơ", "d) Chuối", "e) Dưa leo"]
    },
    {
        question: "Các nước thành viên của Liên minh châu Âu (EU) bao gồm:",
        answers: ["a) Pháp", "b) Đức", "c) Ý", "d) Tây Ban Nha", "e) Thụy Điển"]
    },
    {
        question: "Các loại loài cây trồng thông dụng bao gồm:",
        answers: ["a) Lúa gạo", "b) Ngô", "c) Cà phê", "d) Cà chua", "e) Cỏ lau"]
    },
    {
        question: "Các loại màu sắc cơ bản bao gồm:",
        answers: ["a) Đỏ", "b) Xanh lá", "c) Vàng", "d) Trắng", "e) Đen"]
    }
];

var multipleChoiceQuestions = [
    {
        question: "Ai là tác giả của cuốn tiểu thuyết 'Nhà giả kim'?",
        answers: ["a) Paulo Coelho", "b) Gabriel García Márquez", "c) Franz Kafka", "d) Haruki Murakami"]
    },
    {
        question: "Công thức hóa học của nước là gì?",
        answers: ["a) H2O", "b) CO2", "c) NaCl", "d) NH3"]
    },
    {
        question: "Đâu là đại dương lớn nhất trên trái đất?",
        answers: ["a) Đại Tây Dương", "b) Ấn Độ Dương", "c) Thái Bình Dương", "d) Nam Dương"]
    },
    {
        question: "Thành phố nào là thủ đô của Pháp?",
        answers: ["a) Marseille", "b) Nice", "c) Lyon", "d) Paris"]
    },
    {
        question: "Ai là nhà khoa học nổi tiếng với lý thuyết tương đối của mình?",
        answers: ["a) Isaac Newton", "b) Albert Einstein", "c) Galileo Galilei", "d) Stephen Hawking"]
    },
    {
        question: "Loài chim nào không biết bay?",
        answers: ["a) Đại bàng", "b) Chích chòe lửa", "c) Kiwi", "d) Sơn ca"]
    },
    {
        question: "Đâu là nguyên tố hoá học có số nguyên tử lớn nhất?",
        answers: ["a) Oxy", "b) Hiđrô", "c) Uran", "d) Krypton"]
    },
    {
        question: "Ngôn ngữ lập trình nào được sử dụng rộng rãi cho việc phát triển trang web?",
        answers: ["a) Python", "b) Java", "c) C++", "d) JavaScript"]
    },
    {
        question: "Quốc gia nào nằm ở bán đảo Scandinavia?",
        answers: ["a) Phần Lan", "b) Đan Mạch", "c) Thụy Điển", "d) Na Uy"]
    },
    {
        question: "Quốc gia nào là quê hương của bộ môn võ thuật Karate?",
        answers: ["a) Nhật Bản", "b) Hàn Quốc", "c) Trung Quốc", "d) Việt Nam"]
    }
];

// Duyệt qua mảng câu hỏi và thêm chúng vào trang web
trueFalseQuestions.forEach(function(question, index) {
    var newQuestion = document.createElement("div");
    newQuestion.classList.add("question");

    var questionContent = document.createElement("p");
    questionContent.textContent = question;
    newQuestion.appendChild(questionContent);

    var options = document.createElement("div");
    options.classList.add("options");

    var trueOption = document.createElement("label");
    trueOption.innerHTML = '<input type="radio" name="q' + (index + 1) + '" value="true"> Đúng';
    options.appendChild(trueOption);

    var falseOption = document.createElement("label");
    falseOption.innerHTML = '<input type="radio" name="q' + (index + 1) + '" value="false"> Sai';
    options.appendChild(falseOption);

    newQuestion.appendChild(options);

    trueFalseQuestionGroup.appendChild(newQuestion);
    questionNumber++;
});

essayQuestions.forEach(function(question, index) {
    var newQuestion = document.createElement("div");
    newQuestion.classList.add("question");

    var questionContent = document.createElement("p");
    questionContent.textContent = question;
    newQuestion.appendChild(questionContent);

    var essayAnswer = document.createElement("textarea");
    essayAnswer.setAttribute("rows", "4");
    essayAnswer.setAttribute("cols", "50");
    newQuestion.appendChild(essayAnswer);

    essayQuestionGroup.appendChild(newQuestion);
    questionNumber++;
});

multipleAnswersQuestions.forEach(function(questionObj, index) {
    var newQuestion = document.createElement("div");
    newQuestion.classList.add("question");

    var questionContent = document.createElement("p");
    questionContent.textContent = questionObj.question;
    newQuestion.appendChild(questionContent);

    var options = document.createElement("div");
    options.classList.add("options");

    questionObj.answers.forEach(function(answer, answerIndex) {
        var label = document.createElement("label");
        label.innerHTML = '<input type="checkbox" name="q' + (index + 1) + '" value="' + String.fromCharCode(97 + answerIndex) + '"> ' + answer;
        options.appendChild(label);
    });

    newQuestion.appendChild(options);

    multipleAnswersQuestionGroup.appendChild(newQuestion);
    questionNumber++;
});

multipleChoiceQuestions.forEach(function(questionObj, index) {
    var newQuestion = document.createElement("div");
    newQuestion.classList.add("question");

    var questionContent = document.createElement("p");
    questionContent.textContent = questionObj.question;
    newQuestion.appendChild(questionContent);

    var options = document.createElement("div");
    options.classList
    .add("options");

    questionObj.answers.forEach(function(answer, answerIndex) {
        var label = document.createElement("label");
        label.innerHTML = '<input type="radio" name="q' + (index + 1) + '" value="' + String.fromCharCode(97 + answerIndex) + '"> ' + answer;
        options.appendChild(label);
    });

    newQuestion.appendChild(options);

    multipleChoiceQuestionGroup.appendChild(newQuestion);
    questionNumber++;
});

function showQuestions(group) {
    var questionGroups = document.querySelectorAll('.question-group');

    // Ẩn tất cả các nhóm câu hỏi
    questionGroups.forEach(function (questionGroup) {
        questionGroup.style.display = 'none';
    });

    // Hiển thị nhóm câu hỏi được chọn
    document.getElementById(group).style.display = 'block';
}


function submitQuiz() {
    // Lấy số câu trả lời đúng
    var correctAnswers = countCorrectAnswers();

    // Hiển thị số câu trả lời đúng và kết quả tổng thể
    alert('Số câu trả lời đúng: ' + correctAnswers + '\nKết quả: ' + determineResult(correctAnswers));
}

function countCorrectAnswers() {
    var correctCount = 0;
    var questionGroups = document.querySelectorAll('.question-group');

    questionGroups.forEach(function(group) {
        var questions = group.querySelectorAll('.question');

        questions.forEach(function(question) {
            var correctOption;
            var options = question.querySelectorAll('input[type="radio"], input[type="checkbox"]');
            
            options.forEach(function(option) {
                if (option.checked && option.value === 'true' || option.checked && option.value === 'a') {
                    correctCount++;
                }
            });
        });
    });

    return correctCount;
}

function determineResult(correctCount) {
    // Đưa ra thông điệp kết quả dựa trên số câu trả lời đúng
    if (correctCount == 10) {
        return "Xuất sắc! Bạn đã đạt điểm tối đa!";
    } else if (correctCount >= 7) {
        return "Tốt lắm! Bạn đã đạt điểm cao!";
    } else if (correctCount >= 5) {
        return "Khá tốt! Bạn đã vượt qua bài kiểm tra!";
    } else {
        return "Cần cố gắng hơn! Bạn có thể thử lại!";
    }
}

