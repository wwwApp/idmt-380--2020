<section class="section">
    <div class="section-title-wrapper">
        <h2 class="section__title"><?php echo $title ?></h2>
        <p class="section__desc"><?php echo $desc ?></p>
    </div>
    <div class="section-button-wrapper">
        <?php
            foreach ($buttons as $button) {
                $buttonText=$button;
                include 'components/button.php';
            }
        ?>
    </div>
    <div class="section__image">
        <img src="<?php echo $imageURL ?>" alt="page header background image" />
    </div>
</section>