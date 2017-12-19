$(document).ready(function () {
    /*
     * 버튼 클릭 핸들러 추가
     */
    function onAdd() {
        var $ul, $li, $label, $div, value;

        value = $('.js-new-item').val();
        // 객체가 비어있지 않은지 검증함
        if (value === '') {
            return;
        }
        $ul = $('ul');
        $li = $('<li>').appendTo($ul);
        $div = $('<div>').addClass('checkbox').appendTo($li);
        $label = $('<label>').appendTo($div);
        $('<input>').attr('type', 'checkbox')
            .addClass('item')
            .attr('name', 'list')
            .click(toggleRemoved)
            .appendTo($label);
        $label.append(value);
        value.val('');
    }

    /* 체크박스 클릭 핸들러
     * 부모 li 엘리먼트의 removed 클래스를 토글한다.
     * @param ev
     */
    function toggleRemoved(ev) {
        var $el;

        $el = $(ev.currentTarget);
        $el.closest('li').toggleClass('removed');
    }

    function onChangeTitle() {
        $('h2').text($('.js-change-title').val());
    }

    $('.js-add').click(onAdd);
    $('.js-item').click(toggleRemoved);
    $('.js-change-title').keyup(onChangeTitle);
});