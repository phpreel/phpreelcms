<div class="form-group">
    <label for="availability">Availability</label><br>

    <select name="availability" class="custom-select" onchange="updateAccess()" id="availability">
        <option value="1" @if (old('availability') != null && old('availability') == 1) selected @endif>Subscription</option>
        <option value="0" @if (old('availability') != null && old('availability') == 0) selected @endif>Free</option>
    </select>
</div>
