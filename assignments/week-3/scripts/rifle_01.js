var rifleWrite2 = document.getElementById("Rifle");
var btn = document.getElementById("btn02");
btn.addEventListener("click", function () {
    var Rifle = {
        platform: 'Tavor',
        rifled: 5.56,
        hasOptic: true,
        <span style="color:hotpink">// Method / Function</span>
        amountAttachment: function () {
        return this.attachment;
    }
    };

        writeRifle(Rifle); <span style="color:hotpink">// Call writeRifle function()</span>

    <span style="color:hotpink">// option 2: select each key/value discretely and
        // write each value to rifle div</span>
        rifleWrite2.insertAdjacentHTML('beforeend',
                                       "Platform: " + Rifle.platform + '&lt;br&gt;');
        rifleWrite2.insertAdjacentHTML('beforeend',
                               "Rifled: " + Rifle.rifled + '&lt;br&gt;');
        rifleWrite2.insertAdjacentHTML('beforeend',
                               "Has Optic: " + Rifle.hasOptic + '&lt;br&gt;');
        rifleWrite2.insertAdjacentHTML('beforeend',
                               "amountRifled(): " + Rifle.amountAttachment());

<span style="color:hotpink">//hide button</span>
    btn02.classList.add("hide-btn");
});
<span style="color:hotpink">// option 1: using a for...in to extract the values
    // and write to rifle div</span>
    function writeRifle(Rifle) {
    var htmlString = "";
    var value = Rifle[key];
    for (var key in Rifle) {
        htmlString += '&lt;p&gt;' + Rifle[key];
    }
    rifleWrite2.insertAdjacentHTML('beforeend', htmlString);
}
