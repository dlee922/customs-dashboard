import pytest
from selenium import webdriver
from selenium.webdriver.common.by import By

@pytest.fixture
def driver():
    driver = webdriver.Chrome()
    yield driver
    driver.quit()

def test_example_domain(driver):
    driver.get('https://example.com')
    assert "Example Domain" in driver.title

    heading = driver.find_element(By.TAG_NAME, 'h1')
    assert heading.text == "Example Domain"
